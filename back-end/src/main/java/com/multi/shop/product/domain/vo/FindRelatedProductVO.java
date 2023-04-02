package com.multi.shop.product.domain.vo;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import lombok.Builder;
import lombok.Getter;

@Getter
public class FindRelatedProductVO {
    private Long id;
    private Category category;
    private Target target;

    @Builder
    public FindRelatedProductVO(Long id, Category category, Target target) {
        this.id = id;
        this.category = category;
        this.target = target;
    }
}
