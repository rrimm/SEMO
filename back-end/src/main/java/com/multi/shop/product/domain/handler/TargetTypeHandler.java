package com.multi.shop.product.domain.handler;

import com.multi.shop.product.domain.Target;
import org.apache.ibatis.type.EnumTypeHandler;

public class TargetTypeHandler extends EnumTypeHandler<Target> {
    public TargetTypeHandler(Class<Target> type) {
        super(type);
    }
}
