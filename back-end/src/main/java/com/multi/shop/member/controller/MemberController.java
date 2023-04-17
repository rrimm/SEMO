package com.multi.shop.member.controller;

import com.multi.shop.member.domain.Member;
import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;
import com.multi.shop.member.dto.response.MemberResponse;
import com.multi.shop.member.dto.response.MembersResponse;
import com.multi.shop.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping("/api/admin/member")
    public ResponseEntity<List<MembersResponse>> list() {
        List<Member> members = memberService.findMembers();
        List<MembersResponse> responses = members.stream()
                .map(MembersResponse::from)
                .collect(Collectors.toList());
        return ResponseEntity.ok(responses);
    }

    @DeleteMapping("/api/admin/member/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        memberService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
