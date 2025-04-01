package config

import (
	"fmt"
	"github.com/spf13/cobra"
)

type HttpConfig struct {
	Port string
}

type GlobalConfig struct {
	Http HttpConfig
}

var Config GlobalConfig

var rootCmd = &cobra.Command{
	Use:   "myConfig",
	Short: "A simple CLI application",
	Long:  `This is a simple CLI application that demonstrates the use of Cobra for command line arguments.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println(Config.Http.Port)
	},
}

func InitConfig() error {
	rootCmd.PersistentFlags().StringVarP(&Config.Http.Port, "port", "n", "8899", "Your HttpPort")
	if err := rootCmd.Execute(); err != nil {
		return err
	}
	return nil
}
