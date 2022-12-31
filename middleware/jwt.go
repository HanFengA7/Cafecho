package middleware

import (
	"Cafecho/utils"
	"Cafecho/utils/errmsg"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"net/http"
	"strings"
	"time"
)

var JwtKey = []byte(utils.JwtKey)

type MyClaims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims

	Issuer    string
	ExpiresAt int64
	IssuedAt  *jwt.NumericDate
	NotBefore *jwt.NumericDate
}

// SetToken 生成Token
func SetToken(username string) (string, int) {
	ExpiresTime := time.Now().Add(24 * time.Hour).Unix()
	RegisteredClaims := MyClaims{
		ExpiresAt: ExpiresTime,
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		NotBefore: jwt.NewNumericDate(time.Now()),
		Issuer:    "Cafecho",
	}

	reqClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, RegisteredClaims)
	token, err := reqClaims.SignedString(JwtKey)
	if err != nil {
		return "", errmsg.ERROR
	} else {
		return token, errmsg.SUCCESS
	}
}

// CheckToken 验证Token
func CheckToken(token string) (*MyClaims, int) {
	regToken, _ := jwt.ParseWithClaims(token, &MyClaims{}, func(token *jwt.Token) (interface{}, error) {
		return JwtKey, nil
	})
	if key, code := regToken.Claims.(*MyClaims); code && regToken.Valid {
		return key, errmsg.SUCCESS
	} else {
		return nil, errmsg.ERROR
	}
}

// JwtToken JWT中间件
func JwtToken() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenHeader := c.Request.Header.Get("Authorization")
		code := errmsg.SUCCESS
		if tokenHeader == "" {
			code = errmsg.ErrorTokeExist
			c.Abort()
		}
		checkToken := strings.SplitN(tokenHeader, " ", 2)
		if len(checkToken) != 2 && checkToken[0] != "Bearer" {
			code = errmsg.ErrorTokeTypeWrong
			c.Abort()
		}
		key, tokenCode := CheckToken(checkToken[1])
		if tokenCode == errmsg.ERROR {
			code = errmsg.ErrorTokeWrong
			c.Abort()
		}
		if time.Now().Unix() > key.ExpiresAt {
			code = errmsg.ErrorTokeRuntime
			c.Abort()
		}
		c.JSON(http.StatusOK, gin.H{
			"code":    code,
			"message": errmsg.GetErrMsg(code),
		})
		c.Set("username", key.Username)
		c.Next()
	}

}
