package main

import (
	"server/config"
	"server/test_server"
)

func main() {
	err := config.InitConfig()
	if err != nil {
		return
	}
	test_server.InitServer()
}
