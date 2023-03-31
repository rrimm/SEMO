package com.multi.shop.product.domain.vo;
// VO (Value Object): 데이터베이스의 레코드를 자바 객체로 표현

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import lombok.Data;

import java.util.List;

@Data
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

