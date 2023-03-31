package com.multi.shop.member.domain;

import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.regex.Pattern;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Password {
    private static final String PASSWORD_FORMAT = "^[a-zA-Z0-9]{8,16}$";
    private static final Pattern PASSWORD_PATTERN = Pattern.compile(PASSWORD_FORMAT);

    private String value;

    private Password(String value) {
        this.value = value;
    }

    public static Password encode(String value, PasswordEncoder encoder) {
        validatePatternIsValid(value);
        return new Password(encoder.encode(value));
    }

    private static boolean isNotValid(String password) {
        return !PASSWORD_PATTERN.matcher(password).matches();
    }

    private static void validatePatternIsValid(String value) {
        if (isNotValid(value)) {
            throw new MemberException(MemberErrorCode.MEMBER_PASSWORD_PATTERN_MUST_BE_VALID);
        }
    }

    public String getValue() {
        return this.value;
    }
}
