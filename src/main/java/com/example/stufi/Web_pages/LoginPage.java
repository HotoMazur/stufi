package com.example.stufi.Web_pages;

import com.example.stufi.User.User;
import com.example.stufi.User.UserDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;

@Controller
public class LoginPage {
    @RequestMapping(value = "/users/test")
    @ResponseBody
    public String testing() {
        return "Test";
    }

    @PostMapping("/login")
    @ResponseBody
    public User login(@RequestBody User user) throws SQLException {
        return UserDao.validateUser(user.getEmail(), user.getPassword());
    }



}
