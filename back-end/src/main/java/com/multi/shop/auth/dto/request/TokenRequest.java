package com.multi.shop.auth.dto.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class TokenRequest {
    private Long memberId;
    private String accessToken;
    private String refreshToken;
}
