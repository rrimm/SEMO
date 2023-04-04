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
        // given
        String text = "a".repeat(length);

        // when
        Content content = Content.from(text);

        // then
        assertThat(content.getValue()).hasSize(length);
    }

    @DisplayName("리뷰의 내용이 250자를 초과하면 예외를 던진다.")
    @ParameterizedTest
    @ValueSource(ints = {251, 300})
    void isNotValidContent(int length) {
        // given
        String text = "a".repeat(length);

        // when
        // then
        assertThatThrownBy(() -> Content.from(text))
                .isInstanceOf(ReviewException.class)
                .hasMessageContaining("리뷰의 내용은 250자 이하여야 합니다.");
    }
}