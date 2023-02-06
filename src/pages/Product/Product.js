import { Add, Remove } from "@material-ui/icons";
import classNames from "classnames/bind";

import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";

import {popularProducts} from '../../data'
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Product() {
  const {slug}=useParams()
  console.log(slug)
  const productDetail=popularProducts.find(x=>x.id==slug)
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <Announcement />
      <div className={cx("container")}>
        <div className={cx("img-product")}>
          <img
            className={cx("img")}
            src={productDetail.img}
            alt=""
          />
        </div>
        <div className={cx("info")}>
          <h1 className={cx("title")}>Jeans</h1>
          <p className={cx("desc")}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            veritatis minima qui repellendus expedita libero ut earum mollitia,
            fugiat eaque. Cumque quo architecto necessitatibus facilis vero fuga
            asperiores ipsum accusantium.
          </p>
          <span className={cx("price")}>$20</span>
          <div className={cx("filter-container")}>
            <div className={cx("filter-content")}>
              <span className={cx("filter-title")}>Color</span>
              <div
                className={cx("filter-color")}
                style={{ background: "black" }}
              ></div>
              <div
                className={cx("filter-color")}
                style={{ background: "darkblue" }}
              ></div>
              <div
                className={cx("filter-color")}
                style={{ background: "gray" }}
              ></div>
            </div>
            <div className={cx("filter-content")}>
              <span className={cx("filter-title")}>Size</span>
              <select className={cx("filter-select")}>
                <option>M</option>
                <option>S</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
                <option>3XL</option>
              </select>
            </div>
          </div>
          <div className={cx("add-container")}>
            <div className={cx("amount-container")}>
              <Remove />
              <span className={cx("amount")}>1</span>
              <Add />
            </div>
            <button className={cx("btn-add")}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Product;
