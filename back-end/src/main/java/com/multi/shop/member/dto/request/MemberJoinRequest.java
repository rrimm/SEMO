package com.multi.shop.member.dto.request;

import com.multi.shop.member.domain.Role;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class MemberJoinRequest {
    @NotNull
    private LocalDate birth;

    @NotNull
    private String email;

    @NotNull
    private String name;

    @NotNull
    private String password;

    @NotNull
    private String phone;

    private Role role = Role.ROLE_USER;

    @Builder
    public MemberJoinRequest(LocalDate birth, String email, String name, String password, String phone) {
        this.birth = birth;
        this.email = email;
        this.name = name;
        this.password = password;
        this.phone = phone;
    }
}
