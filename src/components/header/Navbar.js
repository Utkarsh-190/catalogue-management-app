import { useState } from "react";
import classes from "./Navbar.module.css";
import Filter from "./Filter";
import Search from "./Search";

const Navbar = ({ productList, onSearchProduct, onFilterHandler }) => {
  const [lastCategory, setLastCategory] = useState("all products");

  const searchProduct = (id) => {
    if (id == "refresh list") {
      filterProduct(lastCategory);
    } else onSearchProduct(id);
  };

  const filterProduct = (category) => {
    setLastCategory(category);
    onFilterHandler(category);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>Catalog management app</div>
      <div className={classes.options}>
        <Filter filterProduct={filterProduct} />
        <Search productList={productList} searchProduct={searchProduct} />
      </div>
    </div>
  );
};

export default Navbar;
