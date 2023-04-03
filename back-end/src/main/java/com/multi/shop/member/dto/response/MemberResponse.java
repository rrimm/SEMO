package com.multi.shop.member.dto.response;

import com.multi.shop.member.domain.Member;
import com.multi.shop.member.domain.vo.MemberVO;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class MemberResponse {
    private String name;
    private String email;
    private String phoneNumber;

    @Builder
    public MemberResponse(String name, String email, String phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public static MemberResponse from(Member member) {
        return MemberResponse.builder()
                .name(member.getName())
                .email(member.getEmail())
                .phoneNumber(member.getPhone())
                .build();
    }
}
