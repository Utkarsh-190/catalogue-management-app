import classes from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={product.image} alt={product.title} />
        <div>{product.category}</div>
      </div>

      <div className={classes.info}>
        <div className={classes.title}>{product.title}</div>

        {/* <div className={classes.description}>{product.description}</div> */}

        <div className={classes.price}>{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
