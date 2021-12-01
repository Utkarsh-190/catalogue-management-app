import classes from "./Navbar.module.css";
import Filter from "./Filter";
import Search from "./Search";

const Navbar = ({ productList }) => {
  const searchProduct = () => {};

  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>Catalog management app</div>
      <div className={classes.options}>
        <Filter />
        <Search productList={productList} searchProduct={searchProduct} />
      </div>
    </div>
  );
};

export default Navbar;
