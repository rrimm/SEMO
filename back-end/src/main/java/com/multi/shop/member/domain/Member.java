package com.multi.shop.member.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Member {
    private Long id;
    private LocalDate birth;
    private String email;
    private String name;
    private String password;
    private String phone;
    private Role role;
}
