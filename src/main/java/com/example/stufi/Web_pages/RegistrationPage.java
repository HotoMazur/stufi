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

//    @GetMapping("/users")
//    ArrayList<String> getAllUsers() throws SQLException {
//        ArrayList<String> users = new ArrayList();
//        Connection connection = DbUtils.connectToDb();
//        PreparedStatement ps = connection.prepareStatement("SELECT name FROM users");
//        ResultSet rs = ps.executeQuery();
//        while (rs.next()){
//            users.add(rs.getString("name"));
//        }
//        return users;
//    }

}
