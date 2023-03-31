package com.multi.shop.member.domain.dao;
//dao: 어떤 테이블에 어떤 행위를 할지
import com.multi.shop.member.domain.Role;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MemberJoinDAO {
    private LocalDate brith;
    private String email;
    private String name;
    private String password;
    private String phone;
    private Role role;

    @Builder
    public MemberJoinDAO(LocalDate brith, String email, String name, String password, String phone) {
        this.brith = brith;
        this.email = email;
        this.name = name;
        this.password = password;
        this.phone = phone;
        this.role = Role.USER;
    }
}
