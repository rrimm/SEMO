package com.multi.shop.product.dto.response;
//DAO (Data Access Object): 데이터베이스에 접근하여 데이터를 조작하는 객체

import com.multi.shop.product.domain.vo.ProductVO;
import lombok.Builder;
import lombok.Data;

@Data
public class ProductsResponse {
    private Long id;
    private String name;
    private String image;
    private int price;

    @Builder
    public ProductsResponse(Long id, String name, String image, int price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
    }

    public static ProductsResponse from(ProductVO vo) {
        return ProductsResponse.builder()
                .id(vo.getId())
                .name(vo.getName())
                .image(vo.getImage())
                .price(vo.getPrice())
                .build();
    }
}
