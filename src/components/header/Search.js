import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search Products" />
    </div>
  );
};

export default Search;
