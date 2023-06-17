package com.example.stufi.Web_pages;

import com.example.stufi.User.User;
import com.example.stufi.User.UserDao;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class RegistrationPage {

    @PostMapping("/registration")
    User newUser(@RequestBody User user) throws SQLException {
        return UserDao.addUserToDb(user);
    }

}
