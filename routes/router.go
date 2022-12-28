package routes

import (
	v1 "Cafecho/api/v1"
	"Cafecho/utils"
	"github.com/gin-gonic/gin"
)

func InitRouter() {
	gin.SetMode(utils.AppMode)
	router := gin.Default()

	RouterV1 := router.Group("api/v1")
	{
		//UserModel RouterV1 Api
		//增加用户
		RouterV1.POST("user/add", v1.AddUser)
		// 查询单个用户
		RouterV1.GET("user", v1.GetUser)
		// 查询用户列表
		RouterV1.GET("users", v1.GetUsers)
		// 编辑用户
		RouterV1.PUT("user/:id", v1.EditUser)
		// 删除用户
		RouterV1.DELETE("user/:id", v1.DeleteUser)

		//CategoryModel RouterV1 Api

		//ArticleModel RouterV1 Api
	}

	router.Run(utils.HttpPort)

}
