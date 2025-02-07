import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from "../components/Footer/Footer";
import MarketingPortfolio from '../components/MarketingPortfolio/MarketingPortfolio';

export const Portfolio = () => {
  return (
    <div>
        <Header />
        <hr />
        <MarketingPortfolio />
        <hr /> 
        <Footer />
    </div>
  )
}