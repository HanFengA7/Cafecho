package model

import (
	"gorm.io/gorm"
)

type Category struct {
	gorm.Model
	ID   uint   `gorm:"primaryKey;autoIncrement" json:"id"`
	Name string `gorm:"type:varchar(20);not null" json:"name"`
}
