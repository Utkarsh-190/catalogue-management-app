import { useState, useEffect } from "react";
import classes from "./Filter.module.css";

const Filter = () => {
  const [categories, setCategories] = useState(["Filter"]);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories([...data, "All products"]);
    };

    // loadCategories();
  }, []);

  return (
    <div className={classes.filterBar}>
      {categories && (
        <select>
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
