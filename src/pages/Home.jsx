import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Services } from "../components/Services/Services";
import { SelectedWork } from "../components/SelectedWork/SelectedWork";
import { Benefits } from "../components/Benefits/Benefits";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
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
};
