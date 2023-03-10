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

	TCCOSBucketURL string
	TCCOSBucketID  string
	TCCOSREGION    string
	TCCOSSecretID  string
	TCCOSSecretKey string
)

func init() {
	file, err := ini.Load("config/config.ini")
	if err != nil {
		fmt.Println("配置文件读取错误,请检查文件路径: ", err)
	}
	LoadServer(file)
	LoadData(file)
	LoadTencentcos(file)
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

func LoadTencentcos(file *ini.File) {
	TCCOSBucketURL = file.Section("tencentcos").Key("TCCOSBucketURL").String()
	TCCOSBucketID = file.Section("tencentcos").Key("TCCOSBucketID").String()
	TCCOSREGION = file.Section("tencentcos").Key("TCCOSREGION").String()
	TCCOSSecretID = file.Section("tencentcos").Key("TCCOSSecretID").String()
	TCCOSSecretKey = file.Section("tencentcos").Key("TCCOSSecretKey").String()
}
