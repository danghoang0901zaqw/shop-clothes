import { Add, Remove } from "@material-ui/icons";
import classNames from "classnames/bind";

import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
function Cart() {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <Announcement />
      <div className={cx("cart")}>
        <h1 className={cx("title")}>YOUR BAG</h1>
        <div className={cx("top")}>
          <button className={cx("btn")}>CONTINUE SHOPPING</button>
          <div className={cx("texts")}>
            <span className={cx("text")}>Shopping Bag (2)</span>
            <span className={cx("text")}>Your Wishlist (0)</span>
          </div>
          <button className={cx("btn", "filled")}>CHECKOUT NOW</button>
        </div>
        <div className={cx("bottom")}>
          <div className={cx("info")}>
            <div className={cx("product")}>
              <div className={cx("desc")}>
                <img
                  alt=""
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className={cx("details")}>
                  <span className={cx("name")}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className={cx("id")}>
                    <b>ID:</b> 7467832
                  </span>
                  <div className={cx("color")}></div>
                  <span className={cx("size")}>
                    <b>Size:</b> 43.5{" "}
                  </span>
                </div>
              </div>
              <span className={cx("price")}>
                <div className={cx("amount-container")}>
                  <Add className={cx("icon")} />
                  <div className={cx("amount")}>2</div>
                  <Remove className={cx("icon")} />
                </div>
                <div className={cx("total")}>$ 30</div>
              </span>
            </div>
            <hr className={cx("separate")} />
            <div className={cx("product")}>
              <div className={cx("desc")}>
                <img
                  alt=""
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className={cx("details")}>
                  <span className={cx("name")}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className={cx("id")}>
                    <b>ID:</b> 7467832
                  </span>
                  <div className={cx("color")}></div>
                  <span className={cx("size")}>
                    <b>Size:</b> 43.5{" "}
                  </span>
                </div>
              </div>
              <span className={cx("price")}>
                <div className={cx("amount-container")}>
                  <Add className={cx("icon")} />
                  <div className={cx("amount")}>2</div>
                  <Remove className={cx("icon")} />
                </div>
                <span className={cx("total")}>$ 30</span>
              </span>
            </div>
          </div>
          <div className={cx("sumary")}>
            <h1 className={cx("title")}>ORDER SUMARY</h1>
            <div className={cx("sumary-container")}>
              <span className={cx("sumary-text")}>Subtotal</span>
              <span className={cx("sumary-price")}>$ 80</span>
            </div>
            <div className={cx("sumary-container")}>
              <span className={cx("sumary-text")}>Estimated Shipping</span>
              <span className={cx("sumary-price")}>$ 5.90</span>
            </div>
            <div className={cx("sumary-container")}>
              <span className={cx("sumary-text")}>Shipping Discount</span>
              <span className={cx("sumary-price")}>$ -5.90 </span>
            </div>
            <div className={cx("sumary-container","money")}>
              <span className={cx("sumary-text", "totals")}>Total</span>
              <span className={cx("sumary-price")}>$ 80</span>
            </div>
            <button className={cx('btn-checkout')}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
