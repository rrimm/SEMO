import React from 'react';

import * as S from './index.styled';

import {
  Bag,
  Basic,
  Hat,
  Outer,
  Pant,
  Shoes,
  Top,
  Total,
} from '../../../assets/Category/image';
import { BROWSER_PATH } from '../../../constants/path';
import { CATEGORY } from '../../../constants/category';

const MAIN_CATEGORIES = [
  {
    text: '전체',
    img: Total,
    path: '',
  },
  {
    text: '모자',
    img: Hat,
    path: `?category=${CATEGORY.HAT}`,
  },
  {
    text: '아우터',
    img: Outer,
    path: `?category=${CATEGORY.OUTER}`,
  },
  {
    text: '상의',
    img: Top,
    path: `?category=${CATEGORY.TOP}`,
  },
  {
    text: '가방',
    img: Bag,
    path: `?category=${CATEGORY.BAG}`,
  },
  {
    text: '바지',
    img: Pant,
    path: `?category=${CATEGORY.PANT}`,
  },
  {
    text: '신발',
    img: Shoes,
    path: `?category=${CATEGORY.SHOES}`,
  },
  {
    text: '베이직',
    img: Basic,
    path: `?category=${CATEGORY.BASIC}`,
  },
];

function Category() {
  return (
    <S.Container>
      <S.Header> Shop By Category </S.Header>
      <S.Section>
        {MAIN_CATEGORIES.map(category => {
          return (
            <>
              <S.StyledLink to={`${BROWSER_PATH.PRODUCT}${category.path}`}>
                <S.Text>{category.text}</S.Text>
                <S.Pic src={category.img}></S.Pic>
              </S.StyledLink>
            </>
          );
        })}
      </S.Section>
    </S.Container>
  );
}
export default Category;
