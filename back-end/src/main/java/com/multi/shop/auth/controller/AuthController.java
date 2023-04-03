package com.multi.shop.auth.controller;

import com.multi.shop.auth.dto.TokenDto;
import com.multi.shop.auth.dto.request.MemberLoginRequest;
import com.multi.shop.auth.dto.request.MemberLogoutRequest;
import com.multi.shop.auth.dto.request.TokenRequest;
import com.multi.shop.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody @Valid MemberLoginRequest request) {
        TokenDto response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody @Valid MemberLogoutRequest request) {
        authService.logout(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody @Valid TokenRequest request) {
        TokenDto response = authService.reissue(request);
        return ResponseEntity.ok(response);
    }

}
