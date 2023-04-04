package com.multi.shop.cart.domain;

import com.multi.shop.cart.exception.CartException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class QuantityTest {

    @DisplayName("장바구니의 수량은 1이상 9이하여야 한다.")
    @ParameterizedTest
    @ValueSource(ints = {1, 9})
    void isValid(int quantity) {
        Quantity actual = Quantity.from(quantity);

        assertThat(actual.getValue()).isEqualTo(quantity);
    }

    @DisplayName("장바구니의 수량은 1미만 9초과이면 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(ints = {0, 10})
    void isNotValid(int actual) {
        assertThatThrownBy(() -> Quantity.from(actual))
                .isInstanceOf(CartException.class)
                .hasMessageContaining("해당 제품의 수량은 1이상, 9이하이여야 합니다.");
    }
}