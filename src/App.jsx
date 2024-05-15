import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { SelectedWork } from "./components/SelectedWork/SelectedWork";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <hr />
      <HeroSection />
      <hr />
      <Services />
      <hr />
      <SelectedWork />
      <hr />
      <Benefits />
      <hr />
      <Footer />
    </>
  );
}

export default App;
