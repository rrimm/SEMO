package com.multi.shop.review.dto.response;

import com.multi.shop.order.domain.vo.OrderProductVO;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class ReviewFormResponse {
    private Long orderId;
    private Long productId;
    private String productImage;
    private String productName;

    @Builder
    public ReviewFormResponse(Long orderId, Long productId, String productImage, String productName) {
        this.orderId = orderId;
        this.productId = productId;
        this.productImage = productImage;
        this.productName = productName;
    }

    public static ReviewFormResponse from(OrderProductVO vo) {
        return ReviewFormResponse.builder()
                .orderId(vo.getId())
                .productId(vo.getProductId())
                .productImage(vo.getProductImage())
                .productName(vo.getProductName())
                .build();
    }
}
