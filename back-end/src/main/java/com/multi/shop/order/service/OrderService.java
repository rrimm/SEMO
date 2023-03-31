package com.multi.shop.order.service;

import com.multi.shop.order.domain.dao.OrderSaveDAO;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public Long save(OrderSaveRequest request) {
        OrderSaveDAO dao = OrderSaveDAO.from(request.getMemberId(), request.getProductId());
        return orderRepository.save(dao);
    }
}
