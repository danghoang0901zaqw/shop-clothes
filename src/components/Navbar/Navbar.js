import Badge  from "@material-ui/core/Badge/Badge";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("left")}>
          <span className={cx("language")}>EN</span>
          <div className={cx("search")}>
            <input className={cx('search-input')}/>
            <SearchOutlined className={cx('search-icon')}/>
          </div>
        </div>
        <div className={cx("center")}>
          <h1 className={cx('logo')}>TDRH.</h1>
          </div>
        <div className={cx("right")}>
          <Link ></Link>
         <Link to="/register" > <div className={cx('menu-item')}>REGISTER</div></Link>
          <div className={cx('menu-item')}>SIGN IN</div>
          <div className={cx('menu-item')}>
            <Badge  className={cx('badge')} badgeContent={8}  color="primary">
              <ShoppingCartOutlined className={cx('cart-icon')}/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
