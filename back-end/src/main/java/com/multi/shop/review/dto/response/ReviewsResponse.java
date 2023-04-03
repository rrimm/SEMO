package com.multi.shop.review.dto.response;

import com.multi.shop.product.domain.Category;
import com.multi.shop.review.domain.vo.ReviewVO;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class ReviewsResponse {
    private Long id;
    private String content;
    private String reviewImage;
    private String memberEmail;
    private Long productId;
    private String productName;
    private Category productCategory;
    private String productImage;

    @Builder
    public ReviewsResponse(Long id, String content, String reviewImage, String memberEmail, Long productId,
                           String productName, Category productCategory, String productImage) {
        this.id = id;
        this.content = content;
        this.reviewImage = reviewImage;
        this.memberEmail = memberEmail;
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
        this.productImage = productImage;
    }

    public static ReviewsResponse from(ReviewVO vo) {
        return ReviewsResponse.builder()
                .id(vo.getId())
                .content(vo.getContent())
                .reviewImage(vo.getReviewImage())
                .memberEmail(vo.getMemberEmail())
                .productId(vo.getProductId())
                .productName(vo.getProductName())
                .productCategory(vo.getProductCategory())
                .productImage(vo.getProductImage())
                .build();
    }
}
