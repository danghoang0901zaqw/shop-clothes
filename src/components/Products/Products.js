import classNames from "classnames/bind";

import { popularProducts } from "../../data";
import Product from "../Product";
import styles from "./Products.module.scss";

const cx = classNames.bind(styles);


function Products() {
  return (
    <div className={cx("wrapper")}>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
