package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	UserName string `gorm:"type: varchar(20)" json:"username"`
	PassWord string `gorm:"type: varchar(20)" json:"password"`
	Role     int    `gorm:"type: int" json:"role"`
}
