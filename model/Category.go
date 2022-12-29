package model

import "Cafecho/utils/errmsg"

type Category struct {
	ID   uint   `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Name string `gorm:"column:name;type:varchar(20);not null" json:"name"`
}

// AddCategory 增加分类
func AddCategory(data *Category) (code int) {
	err := db.Create(&data).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// CheckCategoryExistName 查询分类是否存在(Name)
func CheckCategoryExistName(name string) (code int) {
	var category Category
	db.Select("id").Where("name = ?", name).First(&category)
	if category.ID > 0 {
		return errmsg.ErrorCategoryNameUsed
	}
	return errmsg.SUCCESS
}

// CheckCategoryExist 查询分类是否存在(ID and Name)
func CheckCategoryExist(id int, name string) (code int) {
	var category Category
	db.Select("id").Where("name = ?", name).First(&category)
	if category.ID == uint(id) {
		return errmsg.SUCCESS
	}
	if category.ID > 0 {
		return errmsg.ErrorCategoryNameUsed
	}
	return errmsg.SUCCESS
}

//查询大概分类下的文章

//查询分类列表

//编辑分类

//删除分类
