package com.multi.shop.auth.controller;

import com.multi.shop.auth.dto.TokenDto;
import com.multi.shop.auth.dto.request.MemberLoginRequest;
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
}
