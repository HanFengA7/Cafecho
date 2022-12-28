package model

import "gorm.io/gorm"

type Article struct {
	gorm.Model
	Category Category `gorm:"foreignKey:Cid"`
	Title    string   `gorm:"type:varchar(20);not null" json:"title"`
	Cid      int      `gorm:"type:int;not null" json:"cid"`
	Desc     string   `gorm:"type:varchar(200)" json:"desc"`
	Content  string   `gorm:"type:longtext" json:"content"`
	Img      string   `gorm:"type:varchar(200)" json:"img"`
}
