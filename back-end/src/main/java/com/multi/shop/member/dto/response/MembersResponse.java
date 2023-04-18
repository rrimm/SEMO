package com.multi.shop.member.dto.response;

import com.multi.shop.member.domain.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class MembersResponse {
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;

    @Builder
    public MembersResponse(Long id, String name, String email, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public static MembersResponse from(Member member) {
        return MembersResponse.builder()
                .id(member.getId())
                .name(member.getName())
                .email(member.getEmail())
                .phoneNumber(member.getPhone())
                .build();
    }
}
