import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Cards from "./Cards";
import Explore from "./Explore";
import Text from "./Text";

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
