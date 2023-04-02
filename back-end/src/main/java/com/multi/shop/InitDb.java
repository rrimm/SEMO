package com.multi.shop;

import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.service.CartService;
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
    private final InitCartService initCartService;

    @PostConstruct
    public void init() {
        memberService.init();
        initCartService.init();
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

    @RequiredArgsConstructor
    @Component
    static class InitCartService {
        private final CartService cartService;

        public void init() {
            CartSaveRequest request1 = CartSaveRequest.builder()
                    .memberId(1L)
                    .productId(1L)
                    .build();
            CartSaveRequest request2 = CartSaveRequest.builder()
                    .memberId(1L)
                    .productId(3L)
                    .build();
            CartSaveRequest request3 = CartSaveRequest.builder()
                    .memberId(1L)
                    .productId(7L)
                    .build();
            CartSaveRequest request4 = CartSaveRequest.builder()
                    .memberId(2L)
                    .productId(10L)
                    .build();
            CartSaveRequest request5 = CartSaveRequest.builder()
                    .memberId(3L)
                    .productId(15L)
                    .build();
            cartService.save(request1);
            cartService.save(request2);
            cartService.save(request3);
            cartService.save(request4);
            cartService.save(request5);
        }
    }
}
