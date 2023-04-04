import React from 'react';
import RelatedProduct from './RelatedProduct';
import * as S from './index.styled';

function Content({ relatedProductRef }) {
  return (
    <div>
      <p />
      <S.Container ref={relatedProductRef}>
        <RelatedProduct />
      </S.Container>
    </div>
  );
}

export default Content;
