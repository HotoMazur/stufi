package com.example.stufi.User;

import Utils.DbUtils;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;

public class UserDao {
    public static User addUserToDb() throws SQLException {
        String[] language ={"en"};
        User newUser = new User("Maz", "1234", "Dima", "Mazurev", "dmytro.mazurev", LocalDate.now(), "12312312", LocalDate.now(),  LocalDate.now(), true, language);
        Connection connection = DbUtils.connectToDb();
        PreparedStatement ps = connection.prepareStatement("insert into \"user\" (name, surname, email, birth_date, phone_number, start_study_date, end_study_date, sex, languages, password, username) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
        ps.setString(1, newUser.getName());
        ps.setString(2, newUser.getSurname());
        ps.setString(3, newUser.getEmail());
        ps.setDate(4, Date.valueOf(newUser.getBirthDate()));
        ps.setString(5, newUser.getPhoneNumber());
        ps.setDate(6, Date.valueOf(newUser.getStartStudyDate()));
        ps.setDate(7, Date.valueOf(newUser.getEndStudyDate()));
        ps.setBoolean(8, newUser.isSex());
        Array array = connection.createArrayOf("varchar", language);
        ps.setArray(9, array);
        ps.setString(10, newUser.getPassword());
        ps.setString(11, newUser.getUsername());

        ps.execute();
        return null;
    }
}
