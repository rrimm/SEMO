package com.multi.shop.product.dto.request;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Data
public class ProductSaveRequest {
    private Category category;
    private String image;
    private String info;
    private String name;
    private int price;
    private int stock;
    private Target target;

    @Builder
    public ProductSaveRequest(Category category, String image, String info, String name, int price, int stock, Target target) {
        this.category = category;
        this.image = image;
        this.info = info;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.target = target;
    }
}
