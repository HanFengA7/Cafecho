package v1

import (
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// AddCategory 增加分类
func AddCategory(c *gin.Context) {
	var data model.Category
	_ = c.ShouldBindJSON(&data)
	code := model.CheckCategoryExistName(data.Name)
	if code == errmsg.SUCCESS {
		model.AddCategory(&data)
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// CheckCategoryExistName 查询分类是否存在(Name)
func CheckCategoryExistName(c *gin.Context) {
	name := c.Param("name")
	code := model.CheckCategoryExistName(name)
	c.JSON(http.StatusOK, gin.H{
		"status":        code,
		"category_name": name,
		"message":       errmsg.GetErrMsg(code),
	})
}

// CheckCategoryExist 查询分类是否存在(ID and Name)
func CheckCategoryExist(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	name := c.Param("name")
	code := model.CheckCategoryExist(id, name)
	c.JSON(http.StatusOK, gin.H{
		"status":        code,
		"category_name": name,
		"message":       errmsg.GetErrMsg(code),
	})
}

//查询分类下的文章

//查询分类列表

//编辑分类

//删除分类
