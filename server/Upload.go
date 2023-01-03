package server

import (
	"Cafecho/utils"
	"Cafecho/utils/errmsg"
	"context"
	"github.com/tencentyun/cos-go-sdk-v5"
	"mime/multipart"
	"net/http"
	"net/url"
)

var (
	TCCOSBucketURL = utils.TCCOSBucketURL
	TCCOSBucketID  = utils.TCCOSBucketID
	TCCOSREGION    = utils.TCCOSREGION
	TCCOSSecretID  = utils.TCCOSSecretID
	TCCOSSecretKey = utils.TCCOSSecretKey
)

type CompleteMultipartUploadResult struct {
	Location string
	Bucket   string
	Key      string
	ETag     string
}

func UploadFile(filepath string, file multipart.File) (error, int) {
	u, _ := url.Parse(TCCOSBucketURL)
	su, _ := url.Parse("https://cos." + TCCOSREGION + "myqcloud.com")
	b := &cos.BaseURL{
		BucketURL:  u,
		ServiceURL: su,
	}
	opt := &cos.ObjectPutOptions{
		ObjectPutHeaderOptions: &cos.ObjectPutHeaderOptions{
			ContentType: "text/html",
		},
		ACLHeaderOptions: &cos.ACLHeaderOptions{
			// 如果不是必要操作，建议上传文件时不要给单个文件设置权限，避免达到限制。若不设置默认继承桶的权限。
			XCosACL: "private",
		},
	}
	client := cos.NewClient(b, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  TCCOSSecretID,
			SecretKey: TCCOSSecretKey,
		},
	})

	_, err := client.Object.Put(context.Background(), filepath, file, opt)
	if err != nil {
		return err, errmsg.ERROR
	}
	return nil, errmsg.SUCCESS
}
