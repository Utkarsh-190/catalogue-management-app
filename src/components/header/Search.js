import { useState, useEffect } from "react";
import classes from "./Search.module.css";

const Search = ({ productList, searchProduct }) => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState();

  const initializeSuggestions = (list) => {
    list = list.map((product) => {
      return {
        start: "",
        end: product.title,
        title: product.title,
        id: product.id,
      };
    });
    setSuggestions(list);
  };

  useEffect(() => {
    initializeSuggestions(productList);
  }, [productList]);

  const searchHandler = (event) => {
    searchProduct(event.target.id);
    setSearchText(event.target.innerText);
  };

  const giveSuggestions = () => {
    setShowSuggestions(true);
  };

  const hideSuggestions = () => {
    if (searchText === "" && productList.length === 1) {
      searchProduct("refresh list");
    }
    setTimeout(() => {
      setShowSuggestions(false);
    }, 300);
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
      initializeSuggestions(productList);
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
                <strong>{product.start}</strong>
                {product.end}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
