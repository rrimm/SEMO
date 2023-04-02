package com.multi.shop.review.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
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
    private String reviewContent;

    private String reviewImage;
}
