package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class NameTest {


    @DisplayName("이름은 2자 이상 20자 이하여야 한다.")
    @ParameterizedTest
    @ValueSource(ints = {2, 20})
    void isValidName(int length) {
        String expected = "a".repeat(length);

        Name actual = Name.from(expected);

        assertThat(actual.getValue()).hasSize(length);
        assertThat(actual.getValue()).isEqualTo(expected);
    }

    @DisplayName("이름은 2자 미만 20자 초과이면 예외를 던진다")
    @ParameterizedTest
    @ValueSource(ints = {1, 21})
    void isNotLengthInRange(int length) {
        String name = "a".repeat(length);

        assertThatThrownBy(() -> Name.from(name))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("사용자의 이름은 2자 이상 20자 이하여야 합니다.");
    }
}