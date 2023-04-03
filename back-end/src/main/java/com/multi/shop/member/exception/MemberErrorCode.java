package com.multi.shop.member.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import lombok.Getter;

@Getter
public enum MemberErrorCode implements ErrorCode {

    MEMBER_NOT_EXIST(400, "MEMBER_01", "멤버가 존재하지 않습니다"),
    MEMBER_PASSWORD_PATTERN_MUST_BE_VALID(400, "MEMBER_02", "패스워드는 영어 대소문자와 숫자로 이루어져 있으며 8자 이상 16자 이하여야 합니다."),
    MEMBER_PHONE_PATTERN_MUST_BE_VALID(400, "MEMBER_03", "올바르지 않은 전화번호 형식입니다. " +
            "올바른 형식은 식별번호 3자리 - 중앙 번호 3, 4자리 - 마지막 번호 4자리 이여야 합니다."),
    MEMBER_WRONG_PASSWORD(400, "MEMBER_04", "비밀번호가 일치하지 않습니다."),
    MEMBER_NAME_CANNOT_BE_OUT_OF_RANGE(400, "MEMBER_05", "사용자의 이름은 2자 이상 20자 이하여야 합니다."),
    MEMBER_EMAIL_CANNOT_BE_OUT_OF_RANGE(400, "MEMBER_06", "사용자의 이메일은 8자 이상 16자 이하여야 합니다."),
    MEMBER_EMAIL_PATTERN_MUST_BE_VALID(400, "MEMBER_07", "올바르지 않은 이메일 형식입니다."),
    JOIN_INVALID_EMAIL(400, "JOIN_01", "이미 가입된 이메일입니다."),
    JOIN_INVALID_PHONE(400, "JOIN_02", "이미 가입된 전화번호입니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;

    MemberErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
