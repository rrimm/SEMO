package com.multi.shop.review.domain.dto.request;

import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.repository.ProductRepository;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
public class ReviewInsertDTO {
    @NotNull

    private String category;

    private String content;

    private String image;

    private Long memberId;

    private Long productId;

    @Builder
    public ReviewInsertDTO(MemberVO member, ProductVO product, String category, String content, String image, Long memberId, Long productId){
        this.category = category;
        this.content = content;
        this.image = image;
        this.memberId = memberId;
        this.productId = productId;
    }


}
