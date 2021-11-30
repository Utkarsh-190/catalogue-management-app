import { useState, useEffect } from "react";
import classes from "./ProductsList.module.css";
import Product from "./Product";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProductList(data);
    };

    loadProducts();
  }, []);

  return (
    <div className={classes.productList}>
      {productList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
