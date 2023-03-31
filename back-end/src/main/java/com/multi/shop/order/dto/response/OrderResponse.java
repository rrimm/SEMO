package com.multi.shop.order.dto.response;

import com.multi.shop.order.domain.vo.OrderFindVO;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderResponse {
    @NotNull
    private Long orderId;

    @NotNull
    private LocalDate orderDate;
    @NotNull
    private int quantity;

    @NotNull
    private String status;

    @NotNull
    private Long productId;
    @NotNull
    private String productName;

    @NotNull
    private int price;

    @Builder
    public OrderResponse(Long orderId, LocalDate orderDate, Long productId, String productName, int price, int quantity, String status) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }

    public static OrderResponse from(OrderFindVO vo) {
        return OrderResponse.builder()
                .orderId(vo.getId())
                .orderDate(vo.getDate())
                .quantity(vo.getQuantity())
                .status(vo.getStatus().getText())
                .productId(vo.getProductId())
                .productName(vo.getProductName())
                .price(vo.getPrice())
                .build();
    }
}
