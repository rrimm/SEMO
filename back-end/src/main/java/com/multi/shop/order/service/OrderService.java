package com.multi.shop.order.service;

import com.multi.shop.order.domain.dao.OrderCancelDAO;
import com.multi.shop.order.domain.dao.OrderSaveDAO;
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
        // TODO: 해당 멤버의 Id 와 제품 Id 가 존재하지 않으면 예외 처리
        OrderSaveDAO dao = OrderSaveDAO.from(request.getMemberId(), request.getProductId());
        return orderRepository.save(dao);
    }

    public List<OrderResponse> findByMemberId(Long memberId) {
        // TODO: 해당 멤버의 Id 가 존재하지 않으면 예외 처리
        return orderRepository.findByMemberId(memberId)
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    @Transactional
    public void cancel(OrderCancelRequest request) {
        // TODO: 해당 주문 Id 가 존재하지 않으면 예외 처리
        OrderCancelDAO dao = OrderCancelDAO.from(request.getOrderId());
        orderRepository.cancel(dao);
    }
}
