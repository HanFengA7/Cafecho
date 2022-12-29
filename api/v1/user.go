package v1

import (
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// AddUser 增加用户
func AddUser(c *gin.Context) {
	var data model.User
	_ = c.ShouldBindJSON(&data)
	code := model.CheckUser(data.UserName)
	if code == errmsg.SUCCESS {
		model.CreateUser(&data)
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// UserExist 查询用户是否存在
func UserExist(c *gin.Context) {

}

// GetUser 查询单个用户
func GetUser(c *gin.Context) {

}

// GetUsers 查询用户列表
func GetUsers(c *gin.Context) {
	pageSize, _ := strconv.Atoi(c.Query("page_size"))
	pageNum, _ := strconv.Atoi(c.Query("page_num"))
	if pageNum == 0 {
		pageSize = 1
	}
	data := model.GetUsers(pageSize, pageNum)
	code := errmsg.SUCCESS
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"message": errmsg.GetErrMsg(code),
	})
}

// EditUser 编辑用户
func EditUser(c *gin.Context) {
	var data model.User
	id, _ := strconv.Atoi(c.Param("id"))
	_ = c.ShouldBindJSON(&data)
	code := model.CheckUpUser(id, data.UserName)
	if code == errmsg.SUCCESS {
		model.EditUser(id, &data)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrMsg(code),
	})
}

// DeleteUser 删除用户
func DeleteUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	code := model.CheckUserID(id)
	if code == errmsg.ERROR {
		model.DeleteUser(id)
		c.JSON(http.StatusOK, gin.H{
			"status":  "SUCCESS",
			"message": "删除成功！",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  "FAIL",
			"message": "用户不存在无法删除！",
		})
	}
}
