import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Navbar from "./components/header/Navbar";
import ProductsList from "./components/list/ProductsList";
import PieChart from "./components/overlay/PieChart";

function App() {
  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const loadProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProductList(data);
    setAllProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onSearchHandler = (id) => {
    let products = allProducts;
    products = products.filter((product) => product.id === Number(id));
    setProductList(products);
  };

  const onFilterHandler = (category) => {
    if (category === "all products") {
      setProductList(allProducts);
      return;
    }
    let products = allProducts;
    products = products.filter((product) => product.category === category);
    setProductList(products);
  };

  const toggleAnalysis = () => {
    setShowAnalysis((prevState) => !prevState);
  };

  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <Navbar
          productList={productList}
          onSearchProduct={onSearchHandler}
          onFilterHandler={onFilterHandler}
        />
      </nav>

      <div className={classes.body}>
        <ProductsList productList={productList} />
      </div>

      {showAnalysis ? (
        <div className={classes.chartModel}>
          <PieChart productList={productList} toggleAnalysis={toggleAnalysis} />
        </div>
      ) : (
        <button onClick={toggleAnalysis}>Analyse</button>
      )}
    </div>
  );
}

export default App;
