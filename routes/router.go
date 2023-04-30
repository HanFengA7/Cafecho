package routes

import (
	v1 "Cafecho/api/v1"
	"Cafecho/middleware"
	"Cafecho/utils"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"strings"
)

func createMyRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	r.AddFromFiles("admin", "wwwroot/Cafecho_Admin/dist/index.html")
	r.AddFromFiles("front", "wwwroot/Cafecho_Front/dist/index.html")
	return r
}

func InitRouter() {
	gin.SetMode(utils.AppMode)
	router := gin.New()

	router.HTMLRender = createMyRender()
	router.Use(middleware.TlsHandler())
	router.Use(middleware.Logger())
	router.Use(gin.Recovery())
	router.Use(middleware.Cors())
	router.Static("admin/assets", "wwwroot/Cafecho_Admin/dist/assets")
	router.Static("/assets", "wwwroot/Cafecho_Front/dist/assets")

	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "front", nil)
	})
	router.GET("/admin", func(c *gin.Context) {
		c.HTML(200, "admin", nil)
	})
	// 404 NotFound
	router.NoRoute(func(c *gin.Context) {
		accept := c.Request.Header.Get("Accept")
		flag := strings.Contains(accept, "text/html")
		if flag {
			content, err := ioutil.ReadFile("wwwroot/Cafecho_Front/dist/index.html")
			if (err) != nil {
				c.Writer.WriteHeader(404)
				c.Writer.WriteString("Not Found")
				return
			}
			c.Writer.WriteHeader(200)
			c.Writer.Header().Add("Accept", "text/html")
			c.Writer.Write(content)
			c.Writer.Flush()
		}
	})
	AuthRouterV1 := router.Group("api/v1")
	AuthRouterV1.Use(middleware.JwtToken())
	{
		//UserModel RouterV1 Api
		// 查询单个用户
		AuthRouterV1.GET("user/:id", v1.GetUser)
		// 查询用户列表
		AuthRouterV1.GET("users", v1.GetUsers)
		// 增加用户
		//AuthRouterV1.POST("user/add", v1.AddUser)
		// 编辑用户
		AuthRouterV1.PUT("user/:id", v1.EditUser)
		// 删除用户
		AuthRouterV1.DELETE("user/:id", v1.DeleteUser)
		//
		AuthRouterV1.GET("AuthTokenInfo/:token", v1.AuthTokenInfo)

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

		//SiteInfoModel RouterV1 Api
		// 编辑网站信息
		AuthRouterV1.PUT("siteinfo", v1.EditSiteInfo)

		//UploadServer RouterV1 Api
		//上传文件
		AuthRouterV1.POST("upload", v1.Upload)
		//上传文章图片
		AuthRouterV1.POST("upload/article/img/", v1.UploadArticleIMG)

	}
	PublicRouterV1 := router.Group("api/v1")
	{

		//CategoryModel RouterV1 Api
		// 查询分类下的文章
		PublicRouterV1.GET("category/AllArticleList/:id", v1.GetCategoryArticleAll)
		// 查询分类列表
		PublicRouterV1.GET("category", v1.GetCategory)
		// 查询单个分类
		PublicRouterV1.GET("category/:id", v1.GetCategoryID)
		// 查询分类是否存在(Name)
		PublicRouterV1.GET("category/CheckA/:name", v1.CheckCategoryExistName)
		// 查询分类是否存在(ID and Name)
		PublicRouterV1.GET("category/CheckB/:id/:name", v1.CheckCategoryExist)

		//ArticleModel RouterV1 Api
		// 查询单个文章
		PublicRouterV1.GET("article/:id", v1.GetArticleInfo)
		// 查询文章列表
		PublicRouterV1.GET("article", v1.GetArticleList)

		//SiteInfoModel RouterV1 Api
		// 查询网站信息
		PublicRouterV1.GET("siteinfo", v1.GetSiteInfo)

		//LoginModel RouterV1 Api
		// 登录
		PublicRouterV1.POST("login", v1.Login)
		PublicRouterV1.POST("user/add", v1.AddUser)

	}
	err := router.RunTLS(utils.HttpPort, "upload/ssl/crt.pem", "upload/ssl/key.pem")
	if err != nil {
		return
	}

}
