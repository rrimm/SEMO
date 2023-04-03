package com.multi.shop.member.controller;

import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;
import com.multi.shop.member.dto.response.MemberResponse;
import com.multi.shop.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        MemberResponse response = memberService.findInfoById(memberId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/auth/member/password")
    public ResponseEntity<Void> updatePassword(@RequestBody @Valid MemberModifyPWRequest request) {
        memberService.updatePassword(request);
        return ResponseEntity.ok().build();
    }
}
