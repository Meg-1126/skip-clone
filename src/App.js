import "./App.css";
import "./styles.css";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Rewards from "./components/Rewards";
import Download from "./components/Download";
import ActionCards from "./components/ActionCards";
import Map from "./components/Map";
import PopularCuisines from "./components/PopularCuisines";
import Footer from "./components/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";

function App() {
  const [screenPosition, setScreenPosition] = useState(0);

  const goBack = () => {
    console.log("back");
    const element = document.getElementById("hero__img");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setScreenPosition(window.scrollY);
    });
  }, []);

  return (
    <div>
      {(screenPosition > 20 && 4700 > screenPosition) ? (
        <IoIosArrowDropupCircle className="icon-backToTop" onClick={goBack} />
      ) : null}
      <Hero />
      <Slider />
      <Rewards />
      <Download />
      <ActionCards />
      <Map />
      <PopularCuisines />
      <Footer />
    </div>
  );
}

export default App;
