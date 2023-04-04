import React, { useRef } from 'react';
import SimpleSlider from './Carousel';
import OrderContainer from './Order';
import MenuTabs from './Content/MenuTabs';
import LinkMenu from './LinkMenu';
import Content from './Content';
import * as S from './index.styled';

function Detail({ data }) {
  const relatedProductRef = useRef(null);

  const handleRelatedTabClick = () => {
    relatedProductRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <br />
      <S.StyledLink>
        <div>
          <LinkMenu category={data.category} target={data.target} />
        </div>
      </S.StyledLink>
      <S.Container>
        <S.Slider>
          <div>
            <SimpleSlider images={data.carousel} />
          </div>
        </S.Slider>
        <S.Order>
          <div>
            <OrderContainer
              name={data.name}
              price={data.price}
              id={data.id}
              info={data.info}
              stock={data.stock}
            />
          </div>
        </S.Order>
      </S.Container>
      <br />
      <MenuTabs onRelatedTabClick={handleRelatedTabClick} />
      <div>
        <Content relatedProductRef={relatedProductRef} />
      </div>
    </div>
  );
}

export default Detail;
