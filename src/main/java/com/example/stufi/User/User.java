package com.example.stufi.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private double id;
    private String username; // unique
    private String password;
    private String name;
    private String surname;
    private String email;
    private LocalDate birthDate;
    private String phoneNumber;
    private LocalDate startStudyDate;
    private LocalDate endStudyDate;
    private boolean sex; // 1 is boy, 0 is girl
    private String[] languages;
    private LocalDate createAt;

    public User(String username, String password, String name, String surname, String email, LocalDate birthDate, String phoneNumber, LocalDate startStudyDate, LocalDate endStudyDate, boolean sex, String[] languages) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
        this.startStudyDate = startStudyDate;
        this.endStudyDate = endStudyDate;
        this.sex = sex;
        this.languages = languages;
    }
}
