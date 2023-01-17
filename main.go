package main

import (
	"Cafecho/model"
	"Cafecho/routes"
)

func main() {

	model.InitDb()
	routes.InitRouter()

}
