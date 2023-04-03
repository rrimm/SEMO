package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.regex.Pattern;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Email {
    private static final int MIN_LENGTH = 8;
    private static final int MAX_LENGTH = 16;
    private static final String EMAIL_FORMAT = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_FORMAT);

    private String value;

    private Email(String value) {
        this.value = value;
    }

    public static Email from(String value) {
        validatePatternIsValid(value);
        validateLengthInRange(value);
        return new Email(value);
    }

    private static boolean isNotValid(String email) {
        return !EMAIL_PATTERN.matcher(email).matches();
    }

    private static void validatePatternIsValid(String value) {
        if (isNotValid(value)) {
            throw new MemberException(MemberErrorCode.MEMBER_EMAIL_PATTERN_MUST_BE_VALID);
        }
    }

    private static void validateLengthInRange(String value) {
        int index = value.indexOf('@');
        int length = value.substring(0, index).length();
        if (length < MIN_LENGTH || MAX_LENGTH < length) {
            throw new MemberException(MemberErrorCode.MEMBER_EMAIL_CANNOT_BE_OUT_OF_RANGE);
        }
    }
}
