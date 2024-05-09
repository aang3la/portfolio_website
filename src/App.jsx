import "./App.css";
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
    </>
  );
}

export default App;
