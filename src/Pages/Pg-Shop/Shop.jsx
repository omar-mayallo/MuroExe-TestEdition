import React from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import {Routes, Route} from "react-router-dom";
import ShopDepartments from "../../Components/Sections/Sh-ShopDepartments/ShopDepartments";
import Department from "../Pg-Department/Department";
const Shop = () => {
  return (
    <SectionContainer Tag="section" Class="shop-page">
      <Routes>
        <Route index element={<ShopDepartments />} />
        <Route path=":departmentId" element={<Department />} />
      </Routes>
    </SectionContainer>
  );
};

export default Shop;
