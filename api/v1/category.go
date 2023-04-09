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

// GetCategoryArticleAll 查询分类下的文章
func GetCategoryArticleAll(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	pageSize, _ := strconv.Atoi(c.Query("page_size"))
	pageNum, _ := strconv.Atoi(c.Query("page_num"))
	if pageNum == 0 {
		pageSize = 1
	}
	code := model.CheckCategoryExistID(id)
	if code == errmsg.SUCCESS {
		data, code1, total := model.GetCategoryArticleAll(id, pageSize, pageNum)
		c.JSON(http.StatusOK, gin.H{
			"status":  code1,
			"data":    data,
			"total":   total,
			"message": errmsg.GetErrMsg(code1),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  code,
			"message": "分类不存在无法查询分类下的文章！",
		})
	}
}

// GetCategory 查询分类列表
func GetCategory(c *gin.Context) {
	pageSize, _ := strconv.Atoi(c.Query("page_size"))
	pageNum, _ := strconv.Atoi(c.Query("page_num"))
	name := c.Query("name")
	if pageNum == 0 {
		pageSize = 1
	}
	data, code, total := model.GetCategory(pageSize, pageNum, name)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"total":   total,
		"message": errmsg.GetErrMsg(code),
	})
}

// GetCategoryID 查询单个分类
func GetCategoryID(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	data, code := model.GetCategoryID(id)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// EditCategory 编辑分类
func EditCategory(c *gin.Context) {
	var data model.Category
	id, _ := strconv.Atoi(c.Param("id"))
	_ = c.ShouldBindJSON(&data)
	code := model.CheckCategoryExist(id, data.Name)
	if code == errmsg.SUCCESS {
		model.EditCategory(id, &data)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// DeleteCategory 删除分类
func DeleteCategory(c *gin.Context) {
	var data model.Category
	id, _ := strconv.Atoi(c.Param("id"))
	code := model.CheckCategoryExistID(id)
	if code == errmsg.SUCCESS {
		model.DeleteCategory(id)
		c.JSON(http.StatusOK, gin.H{
			"status":  code,
			"data":    data,
			"message": "删除成功！",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  "FAIL",
			"message": "分类不存在无法删除！",
		})
	}
}
