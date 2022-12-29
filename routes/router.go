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
		// 增加用户
		RouterV1.POST("user/add", v1.AddUser)
		// 查询单个用户
		RouterV1.GET("user/:id", v1.GetUser)
		// 查询用户列表
		RouterV1.GET("users", v1.GetUsers)
		// 编辑用户
		RouterV1.PUT("user/:id", v1.EditUser)
		// 删除用户
		RouterV1.DELETE("user/:id", v1.DeleteUser)

		//CategoryModel RouterV1 Api
		// 增加分类
		RouterV1.POST("category/add", v1.AddCategory)
		// 查询分类列表
		RouterV1.GET("category", v1.GetCategory)
		// 查询分类是否存在(Name)
		RouterV1.GET("category/CheckA/:name", v1.CheckCategoryExistName)
		// 查询分类是否存在(ID and Name)
		RouterV1.GET("category/CheckB/:id/:name", v1.CheckCategoryExist)
		// 编辑分类
		RouterV1.PUT("category/:id", v1.EditCategory)
		// 删除分类
		RouterV1.DELETE("category/:id", v1.DeleteCategory)

		//ArticleModel RouterV1 Api
		// 增加文章
		RouterV1.POST("article/add", v1.AddArticle)
	}

	router.Run(utils.HttpPort)

}
