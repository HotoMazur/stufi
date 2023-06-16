package com.example.stufi;

import com.example.stufi.User.UserDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;

@SpringBootApplication
@Controller
public class StufiApplication {

	public static void main(String[] args) throws SQLException {
//		UserDao.addUserToDb();
		SpringApplication.run(StufiApplication.class, args);

	}

	@RequestMapping(value = "/users/test")
	@ResponseBody
	public String testing() {
		return "Test";
	}

}
