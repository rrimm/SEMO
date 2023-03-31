package com.multi.shop.product.dto.response;
//DAO (Data Access Object): 데이터베이스에 접근하여 데이터를 조작하는 객체

import com.multi.shop.product.domain.Category;
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
    public static ProductResponse of(ProductVO vo){
        return ProductResponse.builder()
                .id(vo.getId())
                .name(vo.getName())
                .image(vo.getImage())
                .price(vo.getPrice())
                .info(vo.getInfo())
                .stock(vo.getStock())
                .category(vo.getCategory())
                .target(vo.getTarget())
                .build();
    }
}
