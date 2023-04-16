package model

import (
	"Cafecho/utils"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"time"
)

var db *gorm.DB
var err error

func InitDb() {
	dns := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		utils.DbUser,
		utils.DbPassWord,
		utils.DbHost,
		utils.DbPort,
		utils.DbName,
	)

	db, err = gorm.Open(mysql.New(mysql.Config{
		DSN: dns, // DSN data source name
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true, // use singular table name, table for `User` would be `user` with this option enabled
		},
	})

	if err != nil {
		fmt.Printf("数据库连接失败,请检查配置！\n %s", err)
	}

	//自动迁移
	err := db.AutoMigrate(&User{}, &Category{}, &Article{})
	if err != nil {
		return
	}

	sqlDB, _ := db.DB()
	// SetMaxIdleConns 设置空闲连接池中连接的最大数量
	sqlDB.SetMaxIdleConns(10)
	// SetMaxOpenConns 设置打开数据库连接的最大数量。
	sqlDB.SetMaxOpenConns(100)
	// SetConnMaxLifetime 设置了连接可复用的最大时间。
	sqlDB.SetConnMaxLifetime(10 * time.Second)

	//sqlDB.Close()

	//Init
	var initInstallResult1 int64
	var initInstallResult2 int64
	var initInstallResult3 int64
	db.Model(&User{}).Count(&initInstallResult1)
	if initInstallResult1 == 0 {
		fmt.Printf("\n")
		fmt.Printf("[Cafecho 初始化数据库中 ...] [用户表]\n")
		users := []User{
			{
				UserName:  "admin",
				PassWord:  "qys02OFK0BFiFA==",
				Email:     "adc@adc.com",
				AvaterUrl: "https://i.stay.pub/xj/701dd99e0f67d858.jpg",
				Role:      1,
			},
		}
		db.Create(users)
		fmt.Printf("[Cafecho] [用户表初始化完成！]\n")
	}
	db.Model(&Category{}).Count(&initInstallResult2)
	if initInstallResult2 == 0 {
		fmt.Printf("[Cafecho 初始化数据库中 ...] [分类表]\n")
		category := []Category{
			{
				Name: "默认分类",
			},
		}
		db.Create(category)
		fmt.Printf("[Cafecho] [分类表初始化完成！]\n")
	}
	db.Model(&Article{}).Count(&initInstallResult3)
	if initInstallResult3 == 0 {
		fmt.Printf("[Cafecho 初始化数据库中 ...] [文章表]\n")
		article := []Article{
			{
				Cid:     1,
				Uid:     1,
				Title:   "欢迎使用Cafecho",
				Desc:    "欢迎使用Cafecho...",
				Content: "<br/><p>如果您看到这篇文章,表示您的Cafecho已经安装成功.</p><br/>",
			},
		}
		db.Create(article)
		fmt.Printf("[Cafecho] [文章表初始化完成！]\n")
		fmt.Printf("\n")
	}
}
