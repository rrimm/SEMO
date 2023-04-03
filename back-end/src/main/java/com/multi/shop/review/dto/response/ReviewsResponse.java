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
    private Long memberId;
    private String memberName;
    private Long productId;
    private String productName;
    private Category productCategory;
    private String productImage;

    @Builder
    public ReviewsResponse(Long id, String content, String reviewImage, Long memberId, String memberName, Long productId, String productName, Category productCategory, String productImage) {
        this.id = id;
        this.content = content;
        this.reviewImage = reviewImage;
        this.memberId = memberId;
        this.memberName = memberName;
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
                .memberId(vo.getMemberId())
                .memberName(vo.getMemberName())
                .productId(vo.getProductId())
                .productName(vo.getProductName())
                .productCategory(vo.getProductCategory())
                .productImage(vo.getProductImage())
                .build();
    }
}
