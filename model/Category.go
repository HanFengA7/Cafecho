package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

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

// CheckCategoryExistID 查询分类是否存在(ID)
func CheckCategoryExistID(id int) (code int) {
	var category Category
	db.Select("id").Where("id = ?", id).First(&category)
	if category.ID == uint(id) {
		return errmsg.SUCCESS
	}
	return errmsg.ERROR
}

// CheckCategoryExist 查询分类是否存在(ID and Name)
func CheckCategoryExist(id int, name string) (code int) {
	var category Category
	db.Select("id, name").Where("name = ?", name).First(&category)
	if category.ID == uint(id) {
		return errmsg.SUCCESS
	}
	if category.ID > 0 {
		return errmsg.ErrorCategoryNameUsed
	}
	return errmsg.SUCCESS
}

// GetCategoryArticleAll 查询分类下的文章
func GetCategoryArticleAll(cid int, pageSize int, pageNum int) ([]Article, int, int64) {
	var categoryArticleList []Article
	var total int64
	err := db.Model(&categoryArticleList).Count(&total).Preload("Category").Limit(pageSize).Offset((pageNum-1)*pageSize).Where("cid = ?", cid).Find(&categoryArticleList).Error
	if err != nil || err == gorm.ErrRecordNotFound {
		return nil, errmsg.ERROR, 0
	}
	return categoryArticleList, errmsg.SUCCESS, total
}

// GetCategory 查询分类列表
func GetCategory(pageSize int, pageNum int) ([]Category, int, int64) {
	var category []Category
	var total int64
	err := db.Model(&category).Count(&total).Limit(pageSize).Offset((pageNum - 1) * pageSize).Find(&category).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, errmsg.ERROR, 0
	}
	return category, errmsg.SUCCESS, total
}

// EditCategory 编辑分类
func EditCategory(id int, data *Category) (code int) {
	var category Category
	var maps = make(map[string]interface{})
	maps["name"] = data.Name
	err := db.Model(&category).Where("id = ?", id).Updates(maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}

// DeleteCategory 删除分类
func DeleteCategory(id int) (code int) {
	var category Category
	err := db.Where("id = ?", id).Unscoped().Delete(&category).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}
