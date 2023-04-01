package com.multi.shop.order.service;

import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.dto.response.OrderResponse;
import com.multi.shop.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Transactional
    public Long save(OrderSaveRequest request) {
        return orderRepository.save(request);
    }

    public List<OrderResponse> findByMemberId(Long memberId) {
        return orderRepository.findByMemberId(memberId)
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    @Transactional
    public void cancel(OrderCancelRequest request) {
        orderRepository.cancel(request);
    }
}
