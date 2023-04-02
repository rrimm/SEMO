package com.multi.shop.product.dto.response;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import com.multi.shop.product.domain.vo.ProductVO;
import lombok.Builder;
import lombok.Data;

@Data
public class ProductsResponse {
    private Long id;
    private String name;
    private String image;
    private int price;
    private Category category;
    private Target target;

    @Builder
    public ProductsResponse(Long id, String name, String image, int price, Category category, Target target) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.target = target;
    }

    public static ProductsResponse from(ProductVO vo) {
        return ProductsResponse.builder()
                .id(vo.getId())
                .name(vo.getName())
                .image(vo.getImage())
                .price(vo.getPrice())
                .category(vo.getCategory())
                .target(vo.getTarget())
                .build();
    }
}
