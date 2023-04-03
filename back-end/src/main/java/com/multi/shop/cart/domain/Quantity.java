package com.multi.shop.cart.domain;

import com.multi.shop.cart.exception.CartErrorCode;
import com.multi.shop.cart.exception.CartException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Quantity {
    private int value;

    private Quantity(int value) {
        this.value = value;
    }

    public static Quantity from(int value) {
        validateOutOfRange(value);
        return new Quantity(value);
    }

    private static boolean isOutOfRange(int value) {
        return value < 1 || 9 < value;
    }

    private static void validateOutOfRange(int value) {
        if (isOutOfRange(value)) {
            throw new CartException(CartErrorCode.PRODUCT_QUANTITY_IS_OUT_OF_RANGE);
        }
    }
}
