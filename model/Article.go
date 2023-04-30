package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type Article struct {
	Category Category `gorm:"foreignKey:Cid"`
	User     User     `gorm:"foreignKey:Uid"`
	Aid      uint     `gorm:"column:aid;primaryKey;autoIncrement" json:"aid"`
	Cid      int      `gorm:"column:cid;type:int;not null" json:"cid"`
	Uid      int      `gorm:"column:uid;type:int;not null" json:"uid"`
	Title    string   `gorm:"column:title;type:varchar(20);not null" json:"title"`
	Tags     string   `gorm:"column:tags;type:text" json:"tags"`
	Desc     string   `gorm:"column:desc;type:varchar(200)" json:"desc"`
	Content  string   `gorm:"column:content;type:longtext" json:"content"`
	Img      string   `gorm:"column:img;type:varchar(200)" json:"img"`
}

// AddArticle 增加文章
func AddArticle(data *Article) (code int) {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// GetArticleInfo 查询单个文章
func GetArticleInfo(id int) (Article, int) {
	var article Article
	err := db.Preload("Category").Joins("User", db.Select("ID", "UserName", "Email", "AvaterUrl")).Where("aid = ?", id).First(&article).Error
	if err != nil && err == gorm.ErrRecordNotFound {
		return article, errmsg.ErrorArticleNotExist
	}
	return article, errmsg.SUCCESS
}

// GetArticleList 查询文章列表
func GetArticleList(title string, pageSiz int, pageNum int) ([]Article, int, int64) {
	var articleList []Article
	var err error
	var total int64
	if title != "" {
		err = db.Preload("Category").Joins("User", db.Select("ID", "UserName", "Email", "AvaterUrl")).Where(
			"title LIKE ?", title+"%",
		).Limit(pageSiz).Offset((pageNum - 1) * pageSiz).Order("aid desc").Find(&articleList).Error
		db.Model(articleList).Where("title LIKE ?", title+"%").Count(&total)
		if err != nil {
			return articleList, errmsg.ERROR, 0
		} else {
			return articleList, errmsg.SUCCESS, total
		}
	}
	err = db.Joins("User", db.Select("ID", "UserName", "Email", "AvaterUrl")).Joins("Category").Limit(pageSiz).Offset((pageNum - 1) * pageSiz).Order("aid desc").Find(&articleList).Error

	db.Model(articleList).Count(&total)
	if err != nil {
		return articleList, errmsg.ERROR, 0
	} else {
		return articleList, errmsg.SUCCESS, total
	}
}

// EditArticle 编辑文章
func EditArticle(id int, data *Article) (code int) {
	var article Article
	var maps = make(map[string]interface{})
	maps["title"] = data.Title
	maps["cid"] = data.Cid
	maps["uid"] = data.Uid
	maps["desc"] = data.Desc
	maps["content"] = data.Content
	maps["img"] = data.Img
	maps["tags"] = data.Tags
	err := db.Model(&article).Where("aid = ?", id).Updates(&maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// DeleteArticle 删除文章
func DeleteArticle(id int) (code int) {
	var article Article
	err := db.Where("aid = ?", id).Unscoped().Delete(&article).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}
