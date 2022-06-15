import React from "react";
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import ShopDepartments from "../../Components/Sections/Sh-ShopDepartments/ShopDepartments";
import Department from "../Pg-Department/Department";

const Shop = () => {
  const {isLoading} = useSelector((state) => state.shop);
  return (
    <SectionContainer Tag="section" Class="shop-page">
      <Routes>
        <Route index element={<ShopDepartments isLoading={isLoading} />} />
        <Route
          path=":departmentId"
          element={<Department isLoading={isLoading} />}
        />
      </Routes>
    </SectionContainer>
  );
};

export default Shop;
