package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class PasswordTest {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @DisplayName("비밀번호는 8자 이상 16자 이하여야 하며 영문자와 숫자로 이루어져 있다.")
    @ParameterizedTest
    @ValueSource(strings = {"apple1234", "Banana1973"})
    void isValidPassword(String expected) {
        Password actual = Password.encode(expected, passwordEncoder);

        assertThat(passwordEncoder.matches(expected, actual.getValue())).isTrue();
    }

    @DisplayName("비밀번호은 8자 미만 16자 초과일 경우 예외를 던진다")
    @ParameterizedTest
    @ValueSource(ints = {7, 17})
    void isNotLengthInRange(int length) {
        String actual = "a".repeat(length);

        assertThatThrownBy(() -> Password.encode(actual, passwordEncoder))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("8자 이상 16자 이하여야 합니다.");
    }

    @DisplayName("비밀번호는 영문자와 숫자가 아닌경우 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(strings = {"apple1234!", "Banana1973가"})
    void isNotValidPattern(String actual) {
        assertThatThrownBy(() -> Password.encode(actual, passwordEncoder))
                .isInstanceOf(MemberException.class)
                .hasMessageContaining("패스워드는 영어 대소문자와 숫자로 이루어져 있으며");
    }
}