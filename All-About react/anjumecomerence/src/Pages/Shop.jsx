import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewColl from "../Components/NewCollections/NewColl";
import Newsletter from "../Components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColl/>
      <Newsletter/>
    </div>
  );
};

export default Shop;
