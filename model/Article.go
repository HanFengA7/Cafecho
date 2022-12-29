package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	Category Category `gorm:"foreignKey:Cid"`
	Title    string   `gorm:"type:varchar(20);not null" json:"title"`
	Cid      int      `gorm:"type:int;not null" json:"cid"`
	Desc     string   `gorm:"type:varchar(200)" json:"desc"`
	Content  string   `gorm:"type:longtext" json:"content"`
	Img      string   `gorm:"type:varchar(200)" json:"img"`
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

//todo 查询文章列表

//编辑文章

//删除文章
