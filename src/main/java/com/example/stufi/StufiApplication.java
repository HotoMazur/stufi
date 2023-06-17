package com.example.stufi;

import com.example.stufi.User.User;
import com.example.stufi.User.UserDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.example.stufi", "com.example.stufi.Web_pages"})
//@Controller
public class StufiApplication {

	public static void main(String[] args){
		SpringApplication.run(StufiApplication.class, args);
	}

//	@PostMapping("/registration")
//	User newUser(@RequestBody User user) throws SQLException {
//		return UserDao.addUserToDb(user);
//	}
//
//	@RequestMapping(value = "/users/test")
//	@ResponseBody
//	public String testing() {
//		return "Test";
//	}

}
