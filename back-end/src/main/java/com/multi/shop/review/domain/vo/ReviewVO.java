package com.multi.shop.review.domain.vo;

import com.multi.shop.product.domain.Category;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class ReviewVO {
    private Long id;
    private String content;
    private String reviewImage;
    private Long memberId;
    private String memberName;
    private Long productId;
    private String productName;
    private Category productCategory;
    private String productImage;
}
