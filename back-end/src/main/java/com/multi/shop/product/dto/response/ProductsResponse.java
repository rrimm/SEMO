package com.multi.shop.product.dto.response;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Product;
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

    public static ProductsResponse from(Product product) {
        return ProductsResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .image(product.getImage())
                .price(product.getPrice())
                .category(product.getCategory())
                .target(product.getTarget())
                .build();
    }
}
