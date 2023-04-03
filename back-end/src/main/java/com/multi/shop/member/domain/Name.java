package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Name {
    private static final int MIN_LENGTH = 2;
    private static final int MAX_LENGTH = 20;

    private String value;

    private Name(String value) {
        this.value = value;
    }

    public static Name from(String value) {
        validateLengthInRange(value);
        return new Name(value);
    }

    private static void validateLengthInRange(String value) {
        int length = value.length();
        if (length < MIN_LENGTH || MAX_LENGTH < length) {
            throw new MemberException(MemberErrorCode.MEMBER_NAME_CANNOT_BE_OUT_OF_RANGE);
        }
    }
}
