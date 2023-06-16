package com.example.stufi;

import com.example.stufi.User.UserDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.SQLException;

@SpringBootApplication
public class StufiApplication {

	public static void main(String[] args) throws SQLException {
		UserDao.addUserToDb();
		SpringApplication.run(StufiApplication.class, args);
		System.out.println("Hello, Diman!");
		int a = 5;
		int b = 10;
		System.out.println(a + b);
	}

}
