package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	Category Category `gorm:"foreignKey:Cid"`
	Title    string   `gorm:"column:title;type:varchar(20);not null" json:"title"`
	Cid      int      `gorm:"column:cid;type:int;not null" json:"cid"`
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

//todo 查询单个文章

// GetArticleList 查询文章列表
func GetArticleList(pageSiz int, pageNum int) ([]Article, int) {
	var articlelist []Article
	err := db.Preload("Category").Limit(pageSiz).Offset((pageNum - 1) * pageSiz).Find(&articlelist).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, errmsg.ERROR
	}
	return articlelist, errmsg.SUCCESS
}

// EditArticle 编辑文章
func EditArticle(id int, data *Article) (code int) {
	var article Article
	var maps = make(map[string]interface{})
	maps["title"] = data.Title
	maps["cid"] = data.Cid
	maps["desc"] = data.Desc
	maps["content"] = data.Content
	maps["img"] = data.Img
	err := db.Model(&article).Where("id = ?", id).Updates(&maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// DeleteArticle 删除文章
func DeleteArticle(id int) (code int) {
	var article Article
	err := db.Where("id = ?", id).Unscoped().Delete(&article).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}
