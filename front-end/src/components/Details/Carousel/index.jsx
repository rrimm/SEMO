import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import Loading from '../../Loading';
import * as S from './index.styled';

function SimpleSlider({ images }) {
  const [loading, setLoading] = useState(true);
  const data = [];

  useEffect(() => {
    if (images !== null || images !== undefined) {
      setLoading(false);
    }
  }, [images]);

  if (loading) {
    return <Loading />;
  } else {
    images.map(img => data.push({ image: img }));
  }

  return (
    <S.Container>
      <Carousel
        data={data}
        time={2000}
        height="500px"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="50px"
        slideBackgroundColor="#f8f8f8"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="120px"
      />
    </S.Container>
  );
}

export default SimpleSlider;
