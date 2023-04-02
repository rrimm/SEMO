package com.multi.shop.member.dto.request;


import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class MemberModifyPWRequest {
    private Long memberId;
    private String nowPassword;
    private String newPassword;
}
