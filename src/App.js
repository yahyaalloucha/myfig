import "./App.css";
import React from "react";
import { Component } from "react";
import Header from "./Header/Header";
import Herocontent from "./Herocontent/Herocontent";
import Undrawmobile from "./Undrawmobile/Undrawmobile";
import Intro from "./Intro/Intro";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    const intro = {
      imgUrl: "/Introimg.svg",
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    };
    const introC = {
      imgUrl: "/imagecopy.svg",
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    };

    const cta = {
      imgUrl: "/imgCta.svg",
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      buttonText: "go to facebook",
      buttonUrl: "https://www.facebook.com/",
    };

    return (
      <div className="container-app">
        <div
          className="divbg"
          style={{
            backgroundImage: "url('/heroBg.svg')",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundPosition: "top right",
            backgroundSize: "contain",
          }}
        >
          <Header></Header>
          <Herocontent></Herocontent>
        </div>
        <Undrawmobile />
        <Intro
          img={intro.imgUrl}
          title={intro.title}
          description={intro.description}
        />
        {/*<Intro
          img={introC.imgUrl}
          title={introC.title}
          description={introC.description}
        />
        <Intro
          img={cta.imgUrl}
          title={cta.title}
          description={cta.description}
          buttonText={cta.buttonText}
          buttonUrl={cta.buttonUrl}
        />
        <Pricing />
        <Footer />
        */}
      </div>
    );
  }
}
export default App;
