package com.multi.shop.member.controller;

import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.dto.response.MemberResponse;
import com.multi.shop.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;
    @PostMapping("/api/join")
    public ResponseEntity<Void> join(@RequestBody @Valid MemberJoinRequest request) {
        memberService.join(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/auth/member")
    public ResponseEntity<MemberResponse> find(@Param("memberId") Long memberId) {
        MemberResponse response = memberService.findById(memberId);
        return ResponseEntity.ok(response);
    }
}
