import React from "react";
import { Component } from "react";
import Styles from "./Pricing.module.css";
class Pricing extends Component {
  render() {
    return (
      <div
        className={Styles.container}
        style={{
          backgroundImage: "url('./bgpricing.svg')",
        }}
      >
        <div className={Styles.text}>
          <h1 className={Styles.tit}>A Price To Suit Everyone</h1>
          <p className={Styles.p}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <h1 className={Styles.price}>
            $40
            <p className={Styles.UI}>UI Design Kit</p>
          </h1>
        </div>
        <div className={Styles.buttconatiner}>
          <p className={Styles.p2}>See, One price. Simple.</p>
          <div className={Styles.button}>Purchase Now</div>
        </div>
      </div>
    );
  }
}
export default Pricing;
