package com.example.stufi.Web_pages;

import com.example.stufi.User.Task;
import com.example.stufi.User.User;
import com.example.stufi.User.UserDao;
import com.example.stufi.Utils.DbUtils;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class FriendsListPage {
    @GetMapping("/friends")
    List<User> getFriends() throws SQLException {
        List<User> users = new ArrayList<>();
        Connection connection = DbUtils.connectToDb();
        PreparedStatement psGetAllFriends = connection.prepareStatement("SELECT id, name, surname FROM users");
        ResultSet rsGetAllFriends = psGetAllFriends.executeQuery();
        while (rsGetAllFriends.next()){
            users.add(new User(rsGetAllFriends.getInt("id"), rsGetAllFriends.getString("name"), rsGetAllFriends.getString("surname")));
        }
        return users;
    }


    @GetMapping("/tasks")
    List<Task> getTasks(){
        List<Task> tasks = new ArrayList<>();
        Task task = new Task("05.04", "Homework");
        for (int i = 0; i < 5; i++) {
            tasks.add(task);
        }
        return tasks;
    }
}
