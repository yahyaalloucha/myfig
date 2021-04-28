import React from "react";
import { Component } from "react";
import styles from "./Undrawmobile.module.css";
import Icon from "./Icon.svg";
import image from "./image.svg";
class Undrawmobile extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.titlecontainer}>
            <h1 className={styles.h1}>Light, Fast & Powerful</h1>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br /> <br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className={styles.elementscard}>
            <div className={styles.elementscard1}>
              <img src={Icon} alt="text" className={styles.Icon} />
              <h2>Title Goes Here</h2>
              <p className={styles.p1}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className={styles.elementscard2}>
              <img src={Icon} alt="text" className={styles.Icon} />
              <h2>Title Goes Here</h2>
              <p className={styles.p1}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="text" className={styles.image} />
        </div>
      </div>
    );
  }
}
export default Undrawmobile;
