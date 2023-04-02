package com.multi.shop.product.domain.vo;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import lombok.Getter;

@Getter
public class ProductVO {
    private Long id;
    private String name;
    private String image;
    private int price;
    private String info;
    private int stock;
    private Category category;
    private Target target;
}

