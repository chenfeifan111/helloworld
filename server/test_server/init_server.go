package test_server

import (
	"github.com/gin-gonic/gin"
	"server/config"
	"server/middleware"
)

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func InitServer() {
	r := gin.New()
	r.Use(middleware.Cors())
	r.POST("/post", func(c *gin.Context) {
		var user User
		err := c.ShouldBindJSON(&user)
		if err != nil {
			c.JSON(404, err.Error())
			return
		}
		c.JSON(200, user)
	})
	err := r.Run(":" + config.Config.Http.Port)
	if err != nil {
		return
	}
}
