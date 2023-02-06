import {
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
  Mail,
} from "@material-ui/icons";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <h1 className={cx("logo")}>TDRH.</h1>
        <p className={cx("desc")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo
          consectetur illum omnis laboriosam accusantium, repellat distinctio
          nulla commodi sint explicabo iste hic aperiam.
        </p>
        <div className={cx("socials")}>
          <div className={cx("social")} style={{ background: "#3b5999" }}>
            <Facebook className={cx("icon")} />
          </div>
          <div className={cx("social")} style={{ background: "#e4405f" }}>
            <Instagram className={cx("icon")} />
          </div>
          <div className={cx("social")} style={{ background: "#55acee" }}>
            <Twitter className={cx("icon")} />
          </div>
          <div className={cx("social")} style={{ background: "#e60023" }}>
            <Pinterest className={cx("icon")} />
          </div>
        </div>
      </div>
      <div className={cx("center")}>
        <h3 className={cx("title-support")}>Useful Links</h3>
        <ul className={cx("list-support")}>
          <li className={cx("item-support")}>Home</li>
          <li className={cx("item-support")}>Cart</li>
          <li className={cx("item-support")}>Man Fashion</li>
          <li className={cx("item-support")}>Woman Fashion</li>
          <li className={cx("item-support")}>Accessories</li>
          <li className={cx("item-support")}> My Account</li>
          <li className={cx("item-support")}>Order Tracking</li>
          <li className={cx("item-support")}> Wishlist</li>
          <li className={cx("item-support")}>Terms</li>
        </ul>
      </div>
      <div className={cx("right")}>
        <h3 className={cx("title-contact")}>Contact</h3>
        <div className={cx("address")}>
          <Room className={cx("icon")} />
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className={cx("phone")}>
          <Phone className={cx("icon")} />
          +84 482 401 75
        </div>
        <div className={cx("email")}>
          <Mail className={cx("icon")} />
          danghoang0901zaqw@gmail.com
        </div>
        <img
          className={cx("payment")}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Footer;
