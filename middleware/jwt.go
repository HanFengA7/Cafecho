package middleware

import "Cafecho/utils"

var JwtKey = []byte(utils.JwtKey)

type MyClaims struct {
	Username string `json:"username"`
}
