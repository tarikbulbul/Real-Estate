import React, { useState } from 'react';
import Dropdown from "./components/Dropdown/Dropdown";
import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/Infosection/InfoSection";
import InteriorSection from './components/InteriorSection/InteriorSection';
import ModernDesign from './components/ModernDesignSection/ModernDesignSection';
import Navbar from "./components/Navbar/Navbar";
import NewHomes from './components/NewHomes/NewHomes';
import { InfoData, InfoDataThree, InfoDataTwo, InfoDataFour, InfoDataFive } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from "./globalStyles";


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData }  />
      <NewHomes {...InfoDataThree}/>
      <InteriorSection {...InfoDataFour} />
      <ModernDesign {...InfoDataTwo} />
      <Footer {...InfoDataFive}/>
    </>
  );
}

export default App;
