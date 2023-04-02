package com.multi.shop.product.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class StockUpdateRequest {
    private Long id;
    private int stock;

    @Builder
    public StockUpdateRequest(Long id, int stock) {
        this.id = id;
        this.stock = stock;
    }

    public static StockUpdateRequest from(Long id, int stock) {
        return StockUpdateRequest.builder()
                .id(id)
                .stock(stock)
                .build();
    }
}
