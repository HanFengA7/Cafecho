package utils

import (
	"fmt"
	"gopkg.in/ini.v1"
)

var (
	AppMode  string
	HttpPort string
	JwtKey   string

	Db         string
	DbHost     string
	DbPort     string
	DbUser     string
	DbPassWord string
	DbName     string

	UPYUNBucket   string
	UPYUNOperator string
	UPYUNPassword string
	UPYUNPath     string
)

func init() {
	file, err := ini.Load("config/config.ini")
	if err != nil {
		fmt.Println("配置文件读取错误,请检查文件路径: ", err)
	}
	LoadServer(file)
	LoadData(file)
	LoadUPYUN(file)
}

func LoadServer(file *ini.File) {
	AppMode = file.Section("server").Key("AppMode").MustString("debug")
	HttpPort = file.Section("server").Key("HttpPort").MustString(":3000")
	JwtKey = file.Section("server").Key("JwtKey").MustString("2DH5cdjh26")
}

func LoadData(file *ini.File) {
	Db = file.Section("database").Key("Db").MustString("mysql")
	DbHost = file.Section("database").Key("DbHost").MustString("localhost")
	DbPort = file.Section("database").Key("DbPort").MustString("3306")
	DbUser = file.Section("database").Key("DbUser").MustString("Cafecho")
	DbPassWord = file.Section("database").Key("DbPassWord").MustString("12345678")
	DbName = file.Section("database").Key("DbName").MustString("Cafecho")
}

func LoadUPYUN(file *ini.File) {
	UPYUNBucket = file.Section("upyun").Key("UPYUNBucket").String()
	UPYUNOperator = file.Section("upyun").Key("UPYUNOperator").String()
	UPYUNPassword = file.Section("upyun").Key("UPYUNPassword").String()
	UPYUNPath = file.Section("upyun").Key("UPYUNPath").String()
}
