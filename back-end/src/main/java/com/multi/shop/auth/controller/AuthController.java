package com.multi.shop.auth.controller;

import com.multi.shop.auth.dto.request.MemberJoinRequest;
import com.multi.shop.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AuthController {
    private final AuthService authService;

    @PostMapping("/join")
    public ResponseEntity<Void> join(@RequestBody @Valid MemberJoinRequest request) {
        authService.join(request);
        return ResponseEntity.ok().build();
    }
}
