package com.multi.shop.product.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Product {
    private Long id;
    private Category category;
    private String image;
    private String info;
    private String name;
    private int price;
    private int stock;
    private Target target;

    @Builder
    public Product(Long id, Category category, String image, String info, String name, int price, int stock, Target target) {
        this.id = id;
        this.category = category;
        this.image = image;
        this.info = info;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.target = target;
    }
}
