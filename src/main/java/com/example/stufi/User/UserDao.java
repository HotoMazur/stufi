package com.example.stufi.User;

import Utils.DbUtils;
import Utils.Security;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;

public class UserDao {
    public static User addUserToDb() throws SQLException {
        String[] language ={"en"};
        User newUser = new User("1234",
                "Dmytro",
                "Mazurev",
                "yttyt@gmai.com",
                LocalDate.now(),
                "VGTU",
                "FS",
                "IT",
                "ITfuc",
                LocalDate.now(),
                "12131213",
                LocalDate.now(),
                LocalDate.now());
        Connection connection = DbUtils.connectToDb();
        PreparedStatement ps = connection.prepareStatement("insert into \"users\" (password,name,surname,email,phone_number,birth_date,uni_name,faculty,major,\"group\",start_study_date,end_study_date,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        ps.setString(1, Security.encodeText(newUser.getPassword()));
        ps.setString(2, newUser.getName());
        ps.setString(3, newUser.getSurname());
        ps.setString(4,newUser.getEmail());
        ps.setString(5, newUser.getPhoneNumber());
        ps.setDate(6, Date.valueOf(newUser.getBirthDate()));
        ps.setString(7,newUser.getUni_name());
        ps.setString(8,newUser.getFaculty());
        ps.setString(9, newUser.getMajor());
        ps.setString(10,newUser.getGroup());
        ps.setDate(11, Date.valueOf(newUser.getStartStudyDate()));
        ps.setDate(12, Date.valueOf(newUser.getEndStudyDate()));
        ps.setDate(13,Date.valueOf(newUser.getCreated_at()));
        ps.execute();
        return null;
    }
}
