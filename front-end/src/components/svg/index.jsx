import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const Container = styled.div``;

function LeftArrow() {
  return (
    <Container>
      <FontAwesomeIcon icon={faAngleLeft} />
    </Container>
  );
}

function RightArrow() {
  return (
    <Container>
      <FontAwesomeIcon icon={faAngleRight} />
    </Container>
  );
}

function House() {
  return <FontAwesomeIcon icon={faHouse} />;
}

function RotateLeft() {
  return <FontAwesomeIcon icon={faRotateLeft} />;
}

export { LeftArrow, RightArrow, House, RotateLeft };
