import React from 'react';
import Banner from '../../components/Main/Banner';
import Cards from '../../components/Main/Cards';
import Category from '../../components/Main/Category';
import Text from '../../components/Main/Text/index';
import Explore from '../../components/Main/Explore/index';

function Main() {
  return (
    <div>
      <Banner />
      <Cards />
      <Category />
      <Text />
      <Explore />
    </div>
  );
}
export default Main;
