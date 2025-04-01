package test_server

import (
	"github.com/gin-gonic/gin"
	"server/config"
)

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func InitServer() {
	r := gin.New()
	r.POST("/get", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello world",
		})
	})
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
