package com.multi.shop.review.domain;

import com.multi.shop.review.exception.ReviewException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
class ContentTest {
    @DisplayName("리뷰의 내용은 250자 이하여야 한다.")
    @ParameterizedTest
    @ValueSource(ints = {1, 10, 100, 250})
    void isValidContent(int length) {
        String expected = "a".repeat(length);

        Content actual = Content.from(expected);

        assertThat(actual.getValue()).hasSize(length);
        assertThat(actual.getValue()).isEqualTo(expected);
    }

    @DisplayName("리뷰의 내용이 250자를 초과하면 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(ints = {251, 300})
    void isNotValidContent(int length) {
        String content = "a".repeat(length);

        assertThatThrownBy(() -> Content.from(content))
                .isInstanceOf(ReviewException.class)
                .hasMessageContaining("리뷰의 내용은 250자 이하여야 합니다.");
    }
}