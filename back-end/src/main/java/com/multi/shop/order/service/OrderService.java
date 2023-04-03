package com.multi.shop.order.service;

import com.multi.shop.cart.repository.CartRepository;
import com.multi.shop.order.domain.vo.OrderVO;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.dto.response.OrderResponse;
import com.multi.shop.order.exception.OrderErrorCode;
import com.multi.shop.order.exception.OrderException;
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
        validateOrdersQuantityIsNotEmpty(request);

        List<Long> orderIds = new ArrayList<>();
        for (OrderSaveRequest saveRequest : request) {
            productService.updateStock(saveRequest);
            cartRepository.deleteById(saveRequest.getCartId());
            Long orderId = orderRepository.save(saveRequest);
            orderIds.add(orderId);
        }

        return orderIds;
    }

    private void validateOrdersQuantityIsNotEmpty(List<OrderSaveRequest> requests) {
        if(requests.isEmpty()) {
            throw new OrderException(OrderErrorCode.ORDERS_REQUEST_EMPTY);
        }
    }

    public List<OrderResponse> findByMemberId(Long memberId) {
        return orderRepository.findByMemberId(memberId)
                .stream()
                .map(OrderResponse::from)
                .toList();
    }

    public OrderVO findById(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(RuntimeException::new);
    }

    @Transactional
    public void cancel(OrderCancelRequest request) {
        // TODO: 이미 취소한 주문 정보이면 예외 처리

        OrderVO findOrder = findById(request.getOrderId());
        OrderSaveRequest updateRequest = OrderSaveRequest.builder()
                .productId(findOrder.getProductId())
                .quantity(findOrder.getQuantity() * -1)
                .build();
        productService.updateStock(updateRequest);

        orderRepository.cancel(request);
    }
}
