package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName string `gorm:"column:username;type: varchar(20);not null" json:"username"`
	PassWord string `gorm:"column:password;type: varchar(20);not null" json:"password"`
	Role     int    `gorm:"type: int" json:"role"`
}

// CheckUser 查询用户是否存在
func CheckUser(username string) (code int) {
	var user User
	db.Select("id").Where("username = ?", username).First(&user)
	if user.ID > 0 {
		return errmsg.ErrorUsernameUsed
	}
	return errmsg.SUCCESS
}

// CreateUser 增加用户
func CreateUser(data *User) int {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// GetUsers 查询用户列表
func GetUsers(pageSize int, pageNum int) []User {
	var users []User
	err := db.Limit(pageSize).Offset((pageNum - 1) * pageSize).Find(&users).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil
	}
	return users
}
