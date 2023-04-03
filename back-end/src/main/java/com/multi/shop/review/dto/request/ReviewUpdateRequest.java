package com.multi.shop.review.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReviewUpdateRequest {

    @NotNull
    private Long id;

    @NotNull
    private String content;
}
