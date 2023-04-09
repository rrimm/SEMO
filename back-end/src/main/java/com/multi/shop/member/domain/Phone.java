package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.regex.Pattern;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Phone {
    private static final String PHONE_FORMAT = "^01(?:0|1|[6-9])-(?:\\d{3}|\\d{4})-\\d{4}$";
    private static final Pattern PHONE_PATTERN = Pattern.compile(PHONE_FORMAT);

    private String value;

    private Phone(String value) {
        this.value = value;
    }

    public static Phone of(String value) {
        validatePatternIsValid(value);
        return new Phone(value);
    }

    private static boolean isNotValid(String phone) {
        return !PHONE_PATTERN.matcher(phone).matches();
    }

    private static void validatePatternIsValid(String value) {
        if (isNotValid(value)) {
            throw new MemberException(MemberErrorCode.MEMBER_PHONE_PATTERN_MUST_BE_VALID);
        }
    }

    public String getValue() {
        return this.value;
    }
}
