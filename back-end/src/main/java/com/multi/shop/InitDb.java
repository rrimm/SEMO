package com.multi.shop;

import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.service.MemberService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@RequiredArgsConstructor
@Component
public class InitDb {

    private final InitMemberService memberService;

    @PostConstruct
    public void init() {
        memberService.init();
    }

    @RequiredArgsConstructor
    @Component
    static class InitMemberService {
        private final MemberService memberService;

        public void init() {
            MemberJoinRequest saveMember1 = MemberJoinRequest.builder()
                    .birth(LocalDate.now())
                    .email("test1234@gmail.com")
                    .name("홍길동")
                    .password("12345678")
                    .phone("010-1234-5678")
                    .build();
            MemberJoinRequest saveMember2 = MemberJoinRequest.builder()
                    .birth(LocalDate.now())
                    .email("test5678@gmail.com")
                    .name("전우치")
                    .password("apple1234")
                    .phone("010-5678-1234")
                    .build();
            MemberJoinRequest saveMember3 = MemberJoinRequest.builder()
                    .birth(LocalDate.now())
                    .email("test123456@gmail.com")
                    .name("저팔계")
                    .password("banana1234")
                    .phone("010-1938-4756")
                    .build();
            memberService.join(saveMember1);
            memberService.join(saveMember2);
            memberService.join(saveMember3);
        }
    }
}
