package com.multi.shop.review.domain.vo;

import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.product.domain.vo.ProductVO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor


public class ReviewVO {
    private Long id;
    private String category;
    private String content;
    private String image;
    private Long memberId;
    private Long productId;
    private MemberVO member;
    private ProductVO product;

    @Builder
    public ReviewVO(Long id, String category, String content, String image, Long memberId, Long productId, MemberVO member, ProductVO product){
        this.id = id;
        this.category = category;
        this.content = content;
        this.image = image;
        this.memberId = memberId;
        this.productId = productId;
        this.member = member;
        this.product = product;
    }

}
