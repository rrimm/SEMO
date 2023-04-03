package com.multi.shop.member.domain.vo;

import com.multi.shop.member.domain.*;
import com.multi.shop.member.dto.request.MemberJoinRequest;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MemberVO {
    private Long id;
    private LocalDate birth;
    private String email;
    private String name;
    private String password;
    private String phone;
    private Role role;

    @Builder
    public MemberVO(Long id, LocalDate birth, String email, String name, String password, String phone, Role role) {
        this.id = id;
        this.birth = birth;
        this.email = email;
        this.name = name;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    public static MemberVO from(MemberJoinRequest request, Email email, Name name, Password password, Phone phone) {
        return MemberVO.builder()
                .birth(request.getBirth())
                .email(email.getValue())
                .name(name.getValue())
                .password(password.getValue())
                .phone(phone.getValue())
                .role(request.getRole())
                .build();
    }

    public static MemberVO from(Member member) {
        return MemberVO.builder()
                .id(member.getId())
                .build();
    }
}
