import React from "react";
import { Component } from "react";
import styles from "./Herocontent.module.css";

class Herocontent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.h1}>
            Introduce Your Product<br></br> Quickly & Effectively
          </h1>
          <a className={styles.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            <br></br>
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br></br>
            penatibus et magnis dis parturient montes, nascetur ridiculus
            <br></br>
            <br></br> mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis,<br></br> sem. Nulla consequat massa quis enim.
          </a>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button1}>Pruchase UI Kit</div>
          <div className={styles.button2}>Learn more</div>
        </div>
      </div>
    );
  }
}
export default Herocontent;
