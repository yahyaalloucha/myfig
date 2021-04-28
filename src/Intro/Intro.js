import React from "react";
import { Component } from "react";
import Styles from "./Intro.module.css";

class Intro extends Component {
  render() {
    const { img, title, description, buttonText, buttonUrl } = this.props;

    return (
      <div className={Styles.container}>
        <div className={Styles.divimage}>
          <img src={img} alt="text" className={Styles.introimg} />
        </div>
        <div className={Styles.text}>
          <h1 className={Styles.h1}>{title}</h1>
          <p className={Styles.p}>{description}</p>
          {buttonText != null && buttonText != "" ? (
            <a className={Styles.button} href={buttonUrl}>
              {buttonText}
            </a>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Intro;
