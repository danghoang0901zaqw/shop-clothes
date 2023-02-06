import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);

function Product({ product }) {
  return (
    <Link to={`${product.id}`}>
      <div className={cx("wrapper")}>
        <div className={cx("circle")}></div>
        <img className={cx("img")} src={product.img} alt="  " />
        <div className={cx("info")}>
          <div className={cx("options")}>
            <ShoppingCartOutlined className={cx("icon")} />
          </div>
          <div className={cx("options")}>
            <Search className={cx("icon")} />
          </div>
          <div className={cx("options")}>
            <FavoriteBorderOutlined className={cx("icon")} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
