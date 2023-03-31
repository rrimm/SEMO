package com.multi.shop.order.repository;

import com.multi.shop.order.domain.dao.OrderCancelDAO;
import com.multi.shop.order.domain.dao.OrderSaveDAO;
import com.multi.shop.order.mapper.OrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class OrderRepository {

    private final OrderMapper orderMapper;

    public Long save(OrderSaveDAO dao) {
        return orderMapper.save(dao);
    }

    public void cancel(OrderCancelDAO dao) {
        orderMapper.cancel(dao);
    }
}
