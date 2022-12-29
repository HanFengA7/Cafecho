package v1

import (
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
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

//todo 查询单个文章

//todo 查询文章列表

//编辑文章

//删除文章
