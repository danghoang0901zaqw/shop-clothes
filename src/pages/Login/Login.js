import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("title")}>CREATE AN ACCOUNT</h1>
        <form className={cx("form")}>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input placeholder="User" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <span className={cx("agree")}>
            By creating an account , I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={cx("btn")}>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
