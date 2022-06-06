import React from "react";

import Collections from "../../Components/Sections/HM-Collections/Collections";
import Main from "../../Components/Sections/HM-Main/Main";
import Features from "../../Components/Sections/HM-Features/Features";
import FeaturedProductsCarousel from "../../Components/Sections/HM-FeaturedProductsCarousel/FeaturedProductsCarousel";
import InstaCarousel from "../../Components/Sections/HM-InstaCarousel/InstaCarousel";
import NewProductsCarousel from "../../Components/Sections/HM-NewProductsCarousel/NewProductsCarousel";

const Home = () => {
  return (
    <>
      <Main />
      <Collections />
      <NewProductsCarousel />
      <Features />
      <FeaturedProductsCarousel />
      <InstaCarousel />
    </>
  );
};

export default Home;
