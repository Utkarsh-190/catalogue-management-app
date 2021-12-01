import { useState, useEffect } from "react";
import classes from "./Filter.module.css";

const Filter = ({ filterProduct }) => {
  const [categories, setCategories] = useState(["Filter"]);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories(["all products", ...data]);
    };

    loadCategories();
  }, []);

  const selectFilterHandler = (event) => {
    // console.log(event.target.value);
    filterProduct(event.target.value);
  };

  return (
    <div className={classes.filterBar}>
      {categories && (
        <select onChange={selectFilterHandler}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Filter;
