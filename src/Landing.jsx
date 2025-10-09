import { LanguageContext } from "./components/LanguageProvider";
import "./styles/fonts-import.css";
import Seccion1 from "./components/componentsSeccion1/Seccion1";
import { useContext } from "react";
import Seccion2 from "./components/componentsSeccion2/Seccion2";
import Seccion3 from "./components/componentsSeccion3/Seccion3";

const Landing = () => {
  const { translation, toggleLanguage } = useContext(LanguageContext);
  
  return (
    <>
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
    </>
  );
};

export default Landing;
