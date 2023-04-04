import React from 'react';

import { ToggleButton } from '@mui/material';

import * as S from './index.styled';

import { CATEGORIES, TARGETS } from '../../../constants/category';

function CategoryNav({ selectedCategory, onClick }) {
  return (
    <S.StyledToggleButtonGroup value={selectedCategory}>
      {CATEGORIES.map(cate => {
        return (
          <ToggleButton
            color={'primary'}
            key={cate.name}
            value={cate.name}
            onClick={() => onClick(cate.name)}
            aria-label="Platform"
          >
            {cate.text}
          </ToggleButton>
        );
      })}
    </S.StyledToggleButtonGroup>
  );
}

export default CategoryNav;

function TargetNav({ selectedTarget, onClick }) {
  return (
    <S.StyledToggleButtonGroup value={selectedTarget}>
      {TARGETS.map(target => {
        return (
          <ToggleButton
            color={'primary'}
            key={target.name}
            value={target.name}
            onClick={() => onClick(target.name)}
            aria-label="Platform"
          >
            {target.text}
          </ToggleButton>
        );
      })}
    </S.StyledToggleButtonGroup>
  );
}

export { CategoryNav, TargetNav };
