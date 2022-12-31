package middleware

import (
	"Cafecho/utils"
	"Cafecho/utils/errmsg"
	"github.com/golang-jwt/jwt/v4"
	"time"
)

var JwtKey = []byte(utils.JwtKey)

type MyClaims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
	ExpiresAt *jwt.NumericDate
	IssuedAt  *jwt.NumericDate
	NotBefore *jwt.NumericDate
	Issuer    string
}

// SetToken 生成Token
func SetToken(username string) (string, int) {
	ExpiresTime := jwt.NewNumericDate(time.Now().Add(24 * time.Hour))
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

// JWT中间件
