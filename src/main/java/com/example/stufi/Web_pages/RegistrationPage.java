package com.example.stufi.Web_pages;

import com.example.stufi.User.User;
import com.example.stufi.User.UserDao;
import com.example.stufi.Utils.DbUtils;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationPage {

    @PostMapping("/registration")
    User newUser(@RequestBody User user) throws SQLException {
        return UserDao.addUserToDb(user);
    }

    @GetMapping("/user/email-exists/{email}")
    public Boolean checkLoginExists(@PathVariable String email) throws SQLException {
        int id = -1;
        Connection connection = DbUtils.connectToDb();
        PreparedStatement psCheckValidateEmail = connection.prepareStatement("SELECT id FROM users WHERE email = ?");
        psCheckValidateEmail.setString(1, email);
        ResultSet rsCheckValidateEmail = psCheckValidateEmail.executeQuery();
        while (rsCheckValidateEmail.next()){
            id = rsCheckValidateEmail.getInt("id");
        }
        rsCheckValidateEmail.close();
        DbUtils.disconnect(connection, psCheckValidateEmail);
        return (id == -1);
    }

}
