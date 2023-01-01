package server

import (
	"Cafecho/utils"
	"github.com/upyun/go-sdk/v3/upyun"
	"mime/multipart"
)

var Bucket = utils.UPYUNBucket
var Operator = utils.UPYUNOperator
var Password = utils.UPYUNPassword

// UploadFile 上传文件
func UploadFile(file multipart.File, fileSize int64) {

	upyunCfg := upyun.NewUpYun(&upyun.UpYunConfig{
		Bucket:   Bucket,
		Operator: Operator,
		Password: Password,
	})

	err := upyunCfg.Put(&upyun.PutObjectConfig{
		Path:   "upload/img/",
		Reader: file,
	})

	if err != nil {
		return
	}
}
