package com.example.stufi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StufiApplication {

	public static void main(String[] args) {
		SpringApplication.run(StufiApplication.class, args);
		System.out.println("Hello, Diman!");
		int a = 5;
		int b = 10;
		System.out.println(a + b);
	}

}
