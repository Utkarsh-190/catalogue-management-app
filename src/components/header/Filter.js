import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={classes.filterBar}>
      <select>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
      </select>
    </div>
  );
};

export default Filter;
