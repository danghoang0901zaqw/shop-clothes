import { Send } from "@material-ui/icons";
import classNames from "classnames/bind";
import styles from "./NewsLetter.module.scss";
const cx = classNames.bind(styles);
function NewsLetter() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Newsletter</h1>
      <p className={cx("desc")}>
        Get timely updates from your favorite products
      </p>
      <div className={cx("input-content")}>
        <input
          type="text"
          className={cx("input")}
          placeholder="Enter your email"
        />
        <button className={cx("btn-send")}>
          <Send className={cx("icon")} />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
