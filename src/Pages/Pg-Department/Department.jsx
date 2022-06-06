import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import ProductItem from "../../Components/Items/ProductItem/ProductItem";

const Department = () => {
  const { shopData } = useSelector((state) => state.shop);
  const Params = useParams();

  const departmentData = shopData.find((dep) => dep.id === Params.departmentId);
  const { items, title, description } = departmentData;
  const ItemsList = items.map((item) => (
    <div className="col-lg-3 col-md-6 col-12" key={item.id}>
      <ProductItem item={item} />
    </div>
  ));

  return (
    <div className="Collection-page container my-5">
      <PgHead title={title} boldParagraph={description} />
      <div className="row">{ItemsList}</div>
    </div>
  );
};

export default Department;
