package routes

import (
	"Cafecho/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

func InitRouter() {
	gin.SetMode(utils.AppMode)
	router := gin.Default()

	routers := router.Group("api/v1")
	{
		routers.GET("hello", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"msg": "ok",
			})
		})
	}

	router.Run(utils.HttpPort)

}
