import classNames from "classnames/bind";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);
function Register() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <h1 className={cx("title")}>SIGN IN</h1>
          <form className={cx("form")}>
            <input placeholder="User" />
            <input type="password" placeholder="Password" />
            <button className={cx("btn")}>LOGIN</button>
            <span>DO NOT YOU REMEMBER THE PASSWORD ?</span>
            <span>CREATE NEW AN ACCOUNT</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
