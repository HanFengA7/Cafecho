package v1

import (
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// AddArticle 增加文章
func AddArticle(c *gin.Context) {
	var data model.Article
	_ = c.ShouldBindJSON(&data)
	code := model.AddArticle(&data)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// GetArticleInfo 查询单个文章
func GetArticleInfo(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	data, code := model.GetArticleInfo(id)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// GetArticleList 查询文章列表
func GetArticleList(c *gin.Context) {
	pageSize, _ := strconv.Atoi(c.Query("page_size"))
	pageNum, _ := strconv.Atoi(c.Query("page_num"))
	title := c.Query("title")
	if pageNum == 0 {
		pageSize = 1
	}
	data, code, total := model.GetArticleList(title, pageSize, pageNum)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"total":   total,
		"message": errmsg.GetErrMsg(code),
	})
}

// EditArticle 编辑文章
func EditArticle(c *gin.Context) {
	var data model.Article
	id, _ := strconv.Atoi(c.Param("id"))
	_ = c.ShouldBindJSON(&data)
	code := model.EditArticle(id, &data)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// DeleteArticle 删除文章
func DeleteArticle(c *gin.Context) {
	var data model.Article
	id, _ := strconv.Atoi(c.Param("id"))
	code := model.DeleteArticle(id)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": "删除成功!",
	})
}
