package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class PhoneTest {

    @DisplayName("전화번호는 숫자로 이루어져 있으며 3자리, 3or4자리, 4자리로 이루어져 있습니다.")
    @ParameterizedTest
    @ValueSource(strings = {"010-1234-5678", "010-123-4567"})
    void isValid(String expected) {
        Phone actual = Phone.of(expected);

        assertThat(actual.getValue()).isEqualTo(expected);
    }

    @DisplayName("올바르지 않은 전화번호 형식이면 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(strings = {"010-1234-567a", "010-123-456@", "010-12 3-4567",
            "01012345678", "010-12-1234", "010-1234-56"})
    void isNotValidPattern(String actual) {
        assertThatThrownBy(() -> Phone.of(actual))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("올바르지 않은 전화번호 형식입니다.");
    }
}