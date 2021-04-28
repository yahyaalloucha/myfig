import React from "react";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.css";
import Landie from "./Landie.svg";
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.navlinks}>
            <a className={styles.link}>Home</a>

            <a className={styles.link}>About</a>

            <a className={styles.link}>Contact</a>
          </div>

          <div className={styles.logo}>
            <img src={Landie} className={styles.Landie}></img>
          </div>

          <div className={styles.button}>Buy Now</div>
        </div>

        <Navbar expand="lg" className={styles.nav}>
          <img src={Landie} className={styles.Landie}></img>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="colla" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className={styles.button}>Buy Now</div>
            <div className={styles.navlinks}>
              <a className={styles.link}>Home</a>

              <a className={styles.link}>About</a>

              <a className={styles.link}>Contact</a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
