package com.multi.shop.review.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Review {
    private Long id;
    private String content;
    private String image;
    private Long memberId;
    private Long productId;

    @Builder
    public Review(Long id, String content, String image, Long memberId, Long productId) {
        this.id = id;
        this.content = content;
        this.image = image;
        this.memberId = memberId;
        this.productId = productId;
    }
}
