package com.example.stufi.User;

import com.example.stufi.Utils.DbUtils;
import com.example.stufi.Utils.Security;

import java.sql.*;
import java.time.LocalDate;

public class UserDao {
    public static User addUserToDb(User newUser) throws SQLException {
        Connection connection = DbUtils.connectToDb();
        PreparedStatement psAddUserToDb = connection.prepareStatement("insert into \"users\" (password,name,surname,email,phone_number,birth_date,uni_name,faculty,major,\"group\",start_study_date,end_study_date,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        psAddUserToDb.setString(1, Security.encodeText(newUser.getPassword()));
        psAddUserToDb.setString(2, newUser.getName());
        psAddUserToDb.setString(3, newUser.getSurname());
        psAddUserToDb.setString(4, newUser.getEmail());
        psAddUserToDb.setString(5, newUser.getPhoneNumber());
        psAddUserToDb.setDate(6, Date.valueOf(newUser.getBirthDate()));
        psAddUserToDb.setString(7, newUser.getUni_name());
        psAddUserToDb.setString(8, newUser.getFaculty());
        psAddUserToDb.setString(9, newUser.getMajor());
        psAddUserToDb.setString(10, newUser.getGroup());
        psAddUserToDb.setDate(11, Date.valueOf(newUser.getStartStudyDate()));
        psAddUserToDb.setDate(12, Date.valueOf(newUser.getEndStudyDate()));
        psAddUserToDb.setDate(13, Date.valueOf(LocalDate.now()));
        psAddUserToDb.execute();
        DbUtils.disconnect(connection, psAddUserToDb);
        return null;
    }

    public static User validateUser(String email, String password) throws SQLException {
        String checkEmail = null;
        String checkPassword = null;
        User user = null;


        Connection connection = DbUtils.connectToDb();
        PreparedStatement psCheckEmailAndPassword = connection.prepareStatement("SELECT email, password FROM users WHERE email = ?");
        psCheckEmailAndPassword.setString(1, email);
        ResultSet rsCheckEmailAndPassword = psCheckEmailAndPassword.executeQuery();
        while (rsCheckEmailAndPassword.next()) {
            checkEmail = rsCheckEmailAndPassword.getString("email");
            checkPassword = rsCheckEmailAndPassword.getString("password");
        }
        rsCheckEmailAndPassword.close();
        psCheckEmailAndPassword.close();
        if (checkEmail != null && checkPassword.equals(Security.encodeText(password))) {
            PreparedStatement psTakeUserData = connection.prepareStatement("SELECT * FROM users WHERE email = ?");
            psTakeUserData.setString(1, email);
            ResultSet rsTakeUserData = psTakeUserData.executeQuery();
            while (rsTakeUserData.next()) {
                user = new User(rsTakeUserData.getInt("id"),
                        rsTakeUserData.getString("name"),
                        rsTakeUserData.getString("surname"),
                        rsTakeUserData.getString("email"),
                        rsTakeUserData.getDate("birth_date").toLocalDate(),
                        rsTakeUserData.getString("uni_name"),
                        rsTakeUserData.getString("faculty"),
                        rsTakeUserData.getString("major"),
                        rsTakeUserData.getString("group"),
                        rsTakeUserData.getDate("created_at").toLocalDate(),
                        rsTakeUserData.getString("phone_number"),
                        rsTakeUserData.getDate("start_study_date").toLocalDate(),
                        rsTakeUserData.getDate("end_study_date").toLocalDate());
            }
        }

        return user;
    }
}

