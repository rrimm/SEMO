package com.multi.shop.order.domain.vo;

import com.multi.shop.order.domain.Status;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class OrderConfirmationVO {
    private Long id;
    private Status status;

    @Builder
    public OrderConfirmationVO(Long id, Status status) {
        this.id = id;
        this.status = status;
    }

    public static OrderConfirmationVO from(Long id, Status status) {
        return OrderConfirmationVO.builder()
                .id(id)
                .status(status)
                .build();
    }
}
