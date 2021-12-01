import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Navbar from "./components/header/Navbar";
import ProductsList from "./components/list/ProductsList";
import PieChart from "./components/overlay/PieChart";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProductList(data);
    };

    loadProducts();
  }, []);

  const onSearchHandler = (id) => {
    let products = productList;
    products = products.filter((product) => product.id === Number(id));
    console.log(products);
    setProductList(products);
  };

  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <Navbar productList={productList} onSearchProduct={onSearchHandler} />
      </nav>
      <div className={classes.body}>
        <ProductsList productList={productList} />
      </div>
    </div>
  );
}

export default App;
