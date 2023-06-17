package com.example.stufi.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private double id;
    private String password;
    private String name;
    private String surname;
    private String email;
    private LocalDate birthDate;
    private String uni_name;
    private String faculty;
    private String major;
    private String group;
    private LocalDate created_at;
    private String phoneNumber;
    private LocalDate startStudyDate;
    private LocalDate endStudyDate;

    public User(String password, String name, String surname, String email, LocalDate birthDate, String uni_name, String faculty, String major, String group, LocalDate created_at, String phoneNumber, LocalDate startStudyDate, LocalDate endStudyDate) {
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.uni_name = uni_name;
        this.faculty = faculty;
        this.major = major;
        this.group = group;
        this.created_at = created_at;
        this.phoneNumber = phoneNumber;
        this.startStudyDate = startStudyDate;
        this.endStudyDate = endStudyDate;
    }
}
