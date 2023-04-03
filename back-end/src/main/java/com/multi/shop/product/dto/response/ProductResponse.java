package com.multi.shop.product.dto.response;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Product;
import com.multi.shop.product.domain.Target;
import com.multi.shop.product.domain.vo.ProductVO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    private Long id;
    private String name;
    private String image;
    private int price;
    private String info;
    private int stock;
    private Category category;
    private Target target;
    private List<String> carousel;

    @Builder
    public ProductResponse(Long id, String name, String image, int price, String info, int stock, Category category, Target target, List<String> carousel) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.info = info;
        this.stock = stock;
        this.carousel = carousel;
        this.category = category;
        this.target = target;
    }

    public static ProductResponse of(Product product, List<String> carousel) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .image(product.getImage())
                .price(product.getPrice())
                .info(product.getInfo())
                .stock(product.getStock())
                .category(product.getCategory())
                .target(product.getTarget())
                .carousel(carousel)
                .build();
    }
}
