package v1

import (
	"Cafecho/server"
	"Cafecho/utils"
	"Cafecho/utils/errmsg"
	"crypto/md5"
	"fmt"
	"github.com/gin-gonic/gin"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"
)

func md5FileName(str string) string {
	data := []byte(str)
	has := md5.Sum(data)
	md5str := fmt.Sprintf("%x", has)
	return md5str
}

func UploadArticleIMG(c *gin.Context) {
	id := c.Query("id")
	img, _ := c.FormFile("img")
	file, _ := img.Open()
	idMD5 := md5FileName(id + time.Now().String())
	filepath := "Article/Img/" + id + "/" + idMD5 + "." + strings.Split(img.Filename, `.`)[1]
	url := utils.TCCOSBucketURL + filepath
	var uploadStatus int
	if id != "" {
		_, uploadStatus = server.UploadFile(filepath, file)
	}

	if uploadStatus == errmsg.SUCCESS {
		c.JSON(http.StatusOK, gin.H{
			"status": uploadStatus,
			"url":    url,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status": uploadStatus,
		})
	}
}

func Upload(c *gin.Context) {
	img, _ := c.FormFile("img")
	file, _ := img.Open()
	idMD5 := md5FileName(time.Now().String() + strconv.Itoa(rand.Int()))
	filepath := "Article/Img/" + idMD5 + "." + strings.Split(img.Filename, `.`)[1]
	url := utils.TCCOSBucketURL + filepath
	var uploadStatus int
	_, uploadStatus = server.UploadFile(filepath, file)

	if uploadStatus == errmsg.SUCCESS {
		c.JSON(http.StatusOK, gin.H{
			"status": uploadStatus,
			"url":    url,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status": uploadStatus,
		})
	}
}
