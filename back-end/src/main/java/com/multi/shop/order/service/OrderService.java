package com.multi.shop.order.service;

import com.multi.shop.cart.repository.CartRepository;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.dto.response.OrderResponse;
import com.multi.shop.order.repository.OrderRepository;
import com.multi.shop.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final ProductService productService;

    @Transactional
    public List<Long> save(List<OrderSaveRequest> request) {
        List<Long> orderIds = new ArrayList<>();
        // TODO: request 의 사이즈가 0이면 예외 처리
        for (OrderSaveRequest saveRequest : request) {
            productService.updateStock(saveRequest);
            cartRepository.deleteById(saveRequest.getCartId());
            Long orderId = orderRepository.save(saveRequest);
            orderIds.add(orderId);
        }
        return orderIds;
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
