package com.multi.shop.order.mapper;

import com.multi.shop.order.domain.dao.OrderCancelDAO;
import com.multi.shop.order.domain.dao.OrderSaveDAO;
import com.multi.shop.order.domain.vo.OrderFindVO;

import java.util.List;

public interface OrderMapper {
    Long save(OrderSaveDAO dao);

    List<OrderFindVO> findByMemberId(Long memberId);

    void cancel(OrderCancelDAO dao);
}
