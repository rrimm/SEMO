package com.multi.shop.review.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class ReviewSaveRequest {
    @NotNull
    private Long memberId;

    @NotNull
    private Long productId;

    @NotNull
    private Long orderId;

    @NotNull
    private String reviewContent;

    private String reviewImage;

    @Builder
    public ReviewSaveRequest(Long memberId, Long productId, Long orderId, String reviewContent, String reviewImage) {
        this.memberId = memberId;
        this.productId = productId;
        this.orderId = orderId;
        this.reviewContent = reviewContent;
        this.reviewImage = reviewImage;
    }
}
