package com.multi.shop.product.dto.request;

import com.multi.shop.product.domain.Category;
import com.multi.shop.product.domain.Target;
import lombok.Data;

@Data
public class RelatedProductsRequest {
    private Long id;
    private Category category;
    private Target target;
}
