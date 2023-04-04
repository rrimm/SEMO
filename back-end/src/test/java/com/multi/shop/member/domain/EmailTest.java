package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class EmailTest {

    private static final String EMAIL_ADDRESS = "@gmail.com";

    @DisplayName("이메일은 8자 이상 16자 이하여야 한다.")
    @ParameterizedTest
    @ValueSource(ints = {8, 16})
    void isValidLength(int length) {
        String text = "a".repeat(length) + EMAIL_ADDRESS;

        Email actual = Email.from(text);

        assertThat(actual.getValue()).hasSize(length + EMAIL_ADDRESS.length());
    }

    @DisplayName("이메일의 길이가 8자 미만 16자 초과이면 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(ints = {7, 17})
    void isNotLengthInRange(int length) {
        String email = "a".repeat(length) + EMAIL_ADDRESS;

        assertThatThrownBy(() -> Email.from(email))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("사용자의 이메일은 8자 이상 16자 이하여야 합니다.");
    }

    @DisplayName("이메일의 형식에 맞으면 예외를 던지지 않는다.")
    @ParameterizedTest
    @ValueSource(strings = {"apple1234", "wolf2023"})
    void isValidPattern(String email) {
        Email actual = Email.from(email + EMAIL_ADDRESS);

        assertThat(actual.getValue()).isEqualTo(email + EMAIL_ADDRESS);
    }

    @DisplayName("이메일의 형식에 맞지 않으면 예외를 던진다.")
    @Test
    void isNotValidPattern() {
        String email = "Banana12" + EMAIL_ADDRESS;

        assertThatThrownBy(() -> Email.from(email))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("올바르지 않은 이메일 형식입니다.");
    }
}