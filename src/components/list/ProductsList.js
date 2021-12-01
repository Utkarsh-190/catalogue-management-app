import { useState, useEffect } from "react";
import classes from "./ProductsList.module.css";
import Product from "./Product";

const ProductsList = ({ productList }) => {
  return (
    <div className={classes.productList}>
      {productList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
