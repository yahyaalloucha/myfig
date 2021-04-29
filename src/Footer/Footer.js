import React from "react";
import { Component } from "react";
import Styles from "./Footer.module.css";
import Landie from "./Landie.svg";
import fb from "./fb.svg";
import twit from "./twit.svg";
import yout from "./yout.svg";
import inst from "./insta.svg";
import lin from "./lin.svg";

class Footer extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.lastdiv}>
          <p className={Styles.copyright}>©2020 Yourcompany</p>
          <img src={Landie} alt="text" className={Styles.img1}></img>
          <div className={Styles.button}>Purchase now</div>
        </div>
        <div className={Styles.Line}></div>
        <div className={Styles.menu}>
          <div className={Styles.Lastmenu}>
            <a className={Styles.a}>Home</a>
            <a className={Styles.a}>About</a>
            <a className={Styles.a}>Contact</a>
          </div>
          <div className={Styles.socialmedia}>
            <img src={fb} alt="text" className={Styles.img} />
            <img src={lin} className={Styles.img} />
            <img src={inst} className={Styles.img} />
            <img src={twit} className={Styles.img} />
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
