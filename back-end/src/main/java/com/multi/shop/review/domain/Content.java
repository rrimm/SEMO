package com.multi.shop.review.domain;

import com.multi.shop.review.exception.ReviewErrorCode;
import com.multi.shop.review.exception.ReviewException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Content {
    private static final int MAX_LENGTH = 250;

    private String value;

    private Content(String value) {
        this.value = value;
    }

    public static Content from(String value) {
        validateLengthInRange(value);
        return new Content(value);
    }

    private static void validateLengthInRange(String value) {
        int length = value.length();
        if (MAX_LENGTH < length) {
            throw new ReviewException(ReviewErrorCode.REVIEW_CONTENT_CANNOT_BE_OUT_OF_RANGE);
        }
    }
}
