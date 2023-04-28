package v1

import (
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetSiteInfo 查询网站信息
func GetSiteInfo(c *gin.Context) {
	data := model.GetSiteInfo()
	c.JSON(http.StatusOK, gin.H{
		"status":  errmsg.SUCCESS,
		"data":    data,
		"message": "查询成功！",
	})
}

// EditSiteInfo 编辑网站信息
func EditSiteInfo(c *gin.Context) {
	var data model.SiteInfo
	_ = c.ShouldBindJSON(&data)
	code := model.EditSiteInfo(&data)
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrMsg(code),
	})
}
