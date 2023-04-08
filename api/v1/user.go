package v1

import (
	"Cafecho/middleware"
	"Cafecho/model"
	"Cafecho/utils/errmsg"
	"Cafecho/utils/validator"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// AddUser 增加用户
func AddUser(c *gin.Context) {
	var data model.User
	var validateCode int
	var msg string
	_ = c.ShouldBindJSON(&data)
	msg, validateCode = validator.Validate(&data)
	if validateCode != errmsg.SUCCESS {
		c.JSON(http.StatusOK, gin.H{
			"status":  validateCode,
			"message": msg,
		})
		c.Abort()
		return
	}
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

// GetUser 查询单个用户
func GetUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	code := model.CheckUserID(id)
	if code == errmsg.ERROR {
		data := model.GetUser(id)
		c.JSON(http.StatusOK, gin.H{
			"status":  errmsg.SUCCESS,
			"data":    data,
			"message": "查询成功！",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  errmsg.ERROR,
			"message": "用户不存在无法查询！",
		})
	}
}

// GetUsers 查询用户列表
func GetUsers(c *gin.Context) {
	pageSize, _ := strconv.Atoi(c.Query("page_size"))
	pageNum, _ := strconv.Atoi(c.Query("page_num"))
	username := c.Query("username")
	if pageNum == 0 {
		pageSize = 1
	}
	data, total := model.GetUsers(username, pageSize, pageNum)
	code := errmsg.SUCCESS
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"data":    data,
		"total":   total,
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

// AuthTokenInfo 解密Token
func AuthTokenInfo(c *gin.Context) {
	token := c.Param("token")
	data, _ := middleware.CheckToken(token)
	username := data.Username
	UserInfo := model.GetUserName(username)
	c.JSON(http.StatusOK, gin.H{
		"TokenData": data,
		"UserInfo":  UserInfo,
	})
}
