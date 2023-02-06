import classNames from "classnames/bind";

import styles from "./CategoryItem.module.scss";

const cx = classNames.bind(styles);
function CategoryItem({ category }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src={category.img} alt=""/>
      <div className={cx("info")}>
        <h1 className={cx("title")}>{category.title}</h1>
        <button className={cx("btn")}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default CategoryItem;
