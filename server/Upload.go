package server

import (
	"Cafecho/utils"
	"Cafecho/utils/errmsg"
	"github.com/upyun/go-sdk/v3/upyun"
	"mime/multipart"
)

var (
	Bucket   = utils.UPYUNBucket
	Operator = utils.UPYUNOperator
	Password = utils.UPYUNPassword
	Path     = utils.UPYUNPath
)

type FormUploadResp struct {
	Code      int      `json:"code"`         // 状态码
	Msg       string   `json:"message"`      // 状态信息
	Url       string   `json:"url"`          // 保存路径
	Timestamp int64    `json:"time"`         // 时间戳
	ImgWidth  int      `json:"image-width"`  // 图片宽度
	ImgHeight int      `json:"image-height"` // 图片高度
	ImgFrames int      `json:"image-frames"` // 图片帧数
	ImgType   string   `json:"image-type"`   // 图片类型
	Sign      string   `json:"sign"`         // 签名
	Taskids   []string `json:"task_ids"`     // 异步任务
}

// UploadFile 上传文件
func UploadFile(file multipart.File) (all, int) {

	// UpYun配置
	upyunCfg := upyun.NewUpYun(&upyun.UpYunConfig{
		Bucket:   Bucket,
		Operator: Operator,
		Password: Password,
	})

	// 上传文件
	err0 := upyunCfg.Put(&upyun.PutObjectConfig{
		Path:              Path,
		Reader:            file,
		Headers:           nil,
		UseMD5:            false,
		UseResumeUpload:   false,
		ResumePartSize:    0,
		MaxResumePutTries: 0,
	})
	if err0 != nil {
		return _, errmsg.ERROR
	}

	info, err1 := upyunCfg.GetInfo(Path)
	if err1 != nil {
		return "", errmsg.ERROR
	} else {
		return info, errmsg.SUCCESS
	}
}
