package routes

import (
	v1 "Cafecho/api/v1"
	"Cafecho/middleware"
	"Cafecho/utils"
	"github.com/gin-gonic/gin"
)

func InitRouter() {
	gin.SetMode(utils.AppMode)
	router := gin.Default()

	AuthRouterV1 := router.Group("api/v1")
	AuthRouterV1.Use(middleware.JwtToken())
	{
		//UserModel RouterV1 Api
		// 查询单个用户
		AuthRouterV1.GET("user/:id", v1.GetUser)
		// 查询用户列表
		AuthRouterV1.GET("users", v1.GetUsers)
		// 增加用户
		AuthRouterV1.POST("user/add", v1.AddUser)
		// 编辑用户
		AuthRouterV1.PUT("user/:id", v1.EditUser)
		// 删除用户
		AuthRouterV1.DELETE("user/:id", v1.DeleteUser)

		//CategoryModel RouterV1 Api
		// 增加分类
		AuthRouterV1.POST("category/add", v1.AddCategory)
		// 编辑分类
		AuthRouterV1.PUT("category/:id", v1.EditCategory)
		// 删除分类
		AuthRouterV1.DELETE("category/:id", v1.DeleteCategory)

		//ArticleModel RouterV1 Api
		// 增加文章
		AuthRouterV1.POST("article/add", v1.AddArticle)
		//编辑文章
		AuthRouterV1.PUT("article/:id", v1.EditArticle)
		//删除文章
		AuthRouterV1.DELETE("article/:id", v1.DeleteArticle)
	}
	PublicRouterV1 := router.Group("api/v1")
	{

		// 查询分类下的文章
		PublicRouterV1.GET("category/AllArticleList/:id", v1.GetCategoryArticleAll)
		// 查询分类列表
		PublicRouterV1.GET("category", v1.GetCategory)
		// 查询分类是否存在(Name)
		PublicRouterV1.GET("category/CheckA/:name", v1.CheckCategoryExistName)
		// 查询分类是否存在(ID and Name)
		PublicRouterV1.GET("category/CheckB/:id/:name", v1.CheckCategoryExist)

		// 查询单个文章
		PublicRouterV1.GET("article/:id", v1.GetArticleInfo)
		// 查询文章列表
		PublicRouterV1.GET("article", v1.GetArticleList)

		PublicRouterV1.POST("login", v1.Login)
	}
	err := router.Run(utils.HttpPort)
	if err != nil {
		return
	}

}
