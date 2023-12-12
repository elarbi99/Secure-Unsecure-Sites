package com.secure.secureapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication()
@ComponentScan(basePackages = "com.secure.secureapp") // Adjust the package name accordingly

public class SecureappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecureappApplication.class, args);
	}

}
