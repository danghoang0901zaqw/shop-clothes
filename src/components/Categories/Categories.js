import classNames from "classnames/bind";
import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "./Categories.module.scss";

import { categories } from "../../data";


const cx = classNames.bind(styles);
function Categories() {
  return (
    <div className={cx("wrapper")}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
