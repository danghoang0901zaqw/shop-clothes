import classNames from "classnames/bind";

import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Products from "../../components/Products";

import styles from "./ProductList.module.scss";

const cx = classNames.bind(styles);
function ProductList() {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <Announcement />
      <div className={cx("title-filter")}>Dresses</div>
      <div className={cx("filter-container")}>
        <div className={cx("filter")}>
          <span className={cx("text-filter")}>Filter Products:</span>
          <select className={cx('select-filter')}>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className={cx('select-filter')}>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={cx("filter")}>
          <span className={cx("text-filter")}>Sort Products:</span>
          <select className={cx('select-filter')}>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductList;
