import MainViewElement1 from "./MainViewElement1";
import bg from "../public/pattern.svg";
import MainViewElement2 from "./MainViewElement2";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const MainView = () => {
  return (
    <div className="w-full h-full absolute text-neutral" id="glowna">
      <div
        className="relative w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-left bg-fixed"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <h1 className="motion-safe:animate-bounce lg:text-7xl text-4xl font-medium text-pink-500">
          Glossy Skin Clinic
        </h1>
      </div>
      <MainViewElement1 />
      <MainViewElement2 />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default MainView;
