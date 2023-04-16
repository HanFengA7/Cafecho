package model

import (
	"Cafecho/utils/errmsg"
	"encoding/base64"
	"golang.org/x/crypto/scrypt"
	"gorm.io/gorm"
	"log"
)

type User struct {
	gorm.Model
	UserName  string `gorm:"column:username;type: varchar(20);not null" json:"username" validate:"required,min=4,max=12" label:"用户名"`
	PassWord  string `gorm:"column:password;type: varchar(20);not null" json:"password" validate:"required,min=6,max=20" label:"密码"`
	Email     string `gorm:"column:email;type: varchar(255);" json:"email" label:"电子邮箱"`
	AvaterUrl string `gorm:"column:avaterurl;type: TEXT" json:"avaterurl" label:"头像外链"`
	Role      int    `gorm:"column:role;type: int;DEFAULT:2;not null" json:"role" validate:"required,gte=1" label:"角色码"`
}

// CheckUser 查询用户是否存在(UserName)
func CheckUser(username string) (code int) {
	var user User
	db.Select("id").Where("username = ?", username).First(&user)
	if user.ID > 0 {
		return errmsg.ErrorUsernameUsed
	}
	return errmsg.SUCCESS
}

// CheckUserID CheckUser 查询用户是否存在(ID)
func CheckUserID(id int) (code int) {
	var user User
	db.Select("id").Where("id = ?", id).First(&user)
	if user.ID > 0 {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// CheckUpUser 更新查询
func CheckUpUser(id int, name string) (code int) {
	var user User
	db.Select("id, username").Where("username = ?", name).First(&user)
	if user.ID == uint(id) {
		return errmsg.SUCCESS
	}
	if user.ID > 0 {
		return errmsg.ErrorUsernameUsed //1001
	}
	return errmsg.SUCCESS
}

// CreateUser 增加用户
func CreateUser(data *User) int {
	data.PassWord = ScryptPw(data.PassWord)
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// GetUsers 查询用户列表
func GetUsers(username string, pageSize int, pageNum int) ([]User, int64) {
	var users []User
	var total int64
	if username != "" {
		db.Select("id,username,role,created_at,email,avaterurl").Where(
			"username LIKE ?", username+"%",
		).Limit(pageSize).Offset((pageNum - 1) * pageSize).Find(&users)
		db.Model(&users).Where(
			"username LIKE ?", username+"%",
		).Count(&total)
		return users, total
	}
	db.Select("id,username,role,created_at,email,avaterurl").Limit(pageSize).Offset((pageNum - 1) * pageSize).Find(&users)
	db.Model(&users).Count(&total)

	if err != nil {
		return users, 0
	}
	return users, total
}

// DeleteUser 删除用户
func DeleteUser(id int) (code int) {
	var user User
	err := db.Where("id = ?", id).Unscoped().Delete(&user).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// GetUser 查询单个用户(ID)
func GetUser(id int) []User {
	var user []User
	err := db.Select("id,username,role,created_at,email,avaterurl").Where("id = ?", id).Find(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil
	}
	return user
}

// GetUserName 查询单个用户(UserName)
func GetUserName(username string) []User {
	var user []User
	err := db.Select("id,username,role,created_at,email,avaterurl").Where("username = ?", username).Find(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil
	}
	return user
}

// EditUser 编辑用户
func EditUser(id int, data *User) (code int) {
	var user User
	var maps = make(map[string]interface{})
	maps["username"] = data.UserName
	maps["role"] = data.Role
	maps["avaterurl"] = data.AvaterUrl
	maps["email"] = data.Email
	err = db.Model(&user).Where("id = ?", id).Updates(maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// ScryptPw 密码加密
func ScryptPw(password string) string {
	const keyLen = 10
	salt := make([]byte, 8)
	salt = []byte{32, 72, 52, 96, 85, 24, 58, 35}
	HashPw, err := scrypt.Key([]byte(password), salt, 32768, 8, 1, keyLen)
	if err != nil {
		log.Fatal(err)
	}
	fpw := base64.StdEncoding.EncodeToString(HashPw)
	return fpw
}

// CheckLogin 登录验证
func CheckLogin(username string, password string) (code int) {
	var user User

	db.Where("username = ?", username).First(&user)

	if user.ID == 0 {
		return errmsg.ErrorUserNotExist
	}
	if ScryptPw(password) != user.PassWord {
		return errmsg.ErrorUserPasswordWrong
	}
	if user.Role != 1 {
		return errmsg.ErrorUserNoRight
	}
	return errmsg.SUCCESS

}
