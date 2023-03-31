package com.multi.shop.auth.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class TokenDto {
    private Long memberId;
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpiresIn;

    @Builder
    public TokenDto(Long memberId, String grantType, String accessToken, String refreshToken, Long accessTokenExpiresIn) {
        this.memberId = memberId;
        this.grantType = grantType;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }
}
