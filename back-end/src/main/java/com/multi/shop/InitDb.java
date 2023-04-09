package com.multi.shop;

import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.service.CartService;
import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.service.MemberService;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.service.OrderService;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.service.ReviewService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Profile("dev")
@RequiredArgsConstructor
@Component
public class InitDb {

    private final InitMemberService memberService;
    private final InitCartService initCartService;
    private final InitOrderService initOrderService;

    @PostConstruct
    public void init() {
        memberService.init();
        initCartService.init();
        initOrderService.init();
    }

    @RequiredArgsConstructor
    @Component
    static class InitMemberService {
        private final MemberService memberService;

        public void init() {
            MemberJoinRequest saveMember1 = MemberJoinRequest.builder()
                    .birth(LocalDate.now())
                    .email("apple1124@gmail.com")
                    .name("홍길동")
                    .password("12345678")
                    .phone("010-1234-5678")
                    .build();
            MemberJoinRequest saveMember2 = MemberJoinRequest.builder()
                    .birth(LocalDate.now())
                    .email("banana1124@gmail.com")
                    .name("전우치")
                    .password("12345678")
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

    @RequiredArgsConstructor
    @Component
    static class InitOrderService {
        private final OrderService orderService;

        public void init() {
            OrderSaveRequest request1 = OrderSaveRequest.builder()
                    .memberId(1L)
                    .productId(10L)
                    .quantity(3)
                    .build();
            OrderSaveRequest request2 = OrderSaveRequest.builder()
                    .memberId(1L)
                    .productId(20L)
                    .quantity(2)
                    .build();
            OrderSaveRequest request3 = OrderSaveRequest.builder()
                    .memberId(1L)
                    .productId(30L)
                    .quantity(1)
                    .build();
            List<OrderSaveRequest> requests = new ArrayList<>(List.of(request1, request2, request3));
            orderService.save(requests);
        }
    }
}
