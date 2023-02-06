import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import styles from "./Slider.module.scss";
import { sliderItems } from "../../data";
const cx = classNames.bind(styles);

function Slider() {
  const sliderRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    sliderRef.current.style.transform = `translateX(${slideIndex * -100}vw)`;
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => (prev <= 0 ? 3 : prev - 1));
    }
    if (direction === "right") {
      setSlideIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("arrow", "left")}>
        <ArrowLeftOutlined
          className={cx("arrow-icon")}
          onClick={() => handleClick("left")}
        />
      </div>

      <div className={cx("container")} ref={sliderRef}>
        {sliderItems.map((slider) => (
          <div
            className={cx("content")}
            style={{ background: slider.bg }}
            key={slider.id}
          >
            <div className={cx("sliders")}>
              <img className={cx("img")} src={slider.img} alt="" />
            </div>
            <div className={cx("info")}>
              <h1 className={cx("title")}>{slider.title}</h1>
              <p className={cx("desc")}>{slider.desc}</p>
              <button className={cx("btn")}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className={cx("arrow", "right")}>
        <ArrowRightOutlined
          className={cx("arrow-icon")}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Slider;
