package com.multi.shop.product.domain.handler;

import com.multi.shop.product.domain.Category;
import org.apache.ibatis.type.EnumTypeHandler;

public class CategoryTypeHandler extends EnumTypeHandler<Category> {

    public CategoryTypeHandler(Class<Category> type) {
        super(type);
    }
}
