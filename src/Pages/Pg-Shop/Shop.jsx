import React from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <SectionContainer Tag="section" Class="shop-page">
      <Outlet />
    </SectionContainer>
  );
};

export default Shop;
