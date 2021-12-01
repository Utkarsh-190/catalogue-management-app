import classes from "./Search.module.css";

const Search = ({ productList, searchProduct }) => {
  const searchHandler = (event) => {
    searchProduct(event.target.id);
  };

  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search Products" />
      {productList && (
        <div className={classes.suggestionBox}>
          {productList.map((product) => {
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
