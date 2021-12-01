import { useState, useEffect } from "react";
import classes from "./Search.module.css";

const Search = ({ productList, searchProduct }) => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    setSuggestions(productList);
  }, [productList]);

  const searchHandler = (event) => {
    setSearchText(event.target.innerText);
    searchProduct(event.target.id);
  };

  const giveSuggestions = () => {
    setShowSuggestions(true);
  };

  const hideSuggestions = () => {
    if (searchText === "") {
      searchProduct("refresh list");
    }
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const changeHandler = (event) => {
    const text = event.target.value.toLowerCase();
    let matches = [];

    if (text.length > 0) {
      productList.map(({ title, id }) => {
        const regex = new RegExp(`${text}`, "i");
        const idx = title.search(regex);
        if (idx === 0) {
          const suggestion = {
            start: title.substring(idx, idx + text.length),
            end: title.substring(idx + text.length, title.length),
            title: title,
            id: id,
          };
          matches.push(suggestion);
        }
      });
      setSuggestions(matches);
    } else {
      setSuggestions(productList);
    }
    setSearchText(text);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        value={searchText}
        placeholder="Search Products"
        onChange={changeHandler}
        onFocus={giveSuggestions}
        onBlur={hideSuggestions}
      />
      {showSuggestions && (
        <div className={classes.suggestionBox}>
          {suggestions.map((product) => {
            return (
              <div key={product.id} id={product.id} onClick={searchHandler}>
                {product.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
