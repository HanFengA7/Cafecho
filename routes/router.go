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
		RouterV1.POST("user/add", v1.AddUser)
		RouterV1.GET("users", v1.GetUsers)
		RouterV1.PUT("user/:id", v1.EditUser)
		RouterV1.DELETE("user/:id", v1.DeleteUser)
		//CategoryModel RouterV1 Api

		//ArticleModel RouterV1 Api
	}

	router.Run(utils.HttpPort)

}
