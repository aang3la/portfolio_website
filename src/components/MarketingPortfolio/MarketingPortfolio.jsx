import React, { useState } from 'react';
import './MarketingPortfolio.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Canva Creatives imports
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
import image9 from '../../assets/9.png';
import image10 from '../../assets/10.jpeg';
// Marketing images imports (renamed to avoid ad blockers)
import marketing1 from '../../assets/marketing1.png';
import marketing2 from '../../assets/marketing2.png';
import marketing3 from '../../assets/marketing3.png';

const MarketingPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canvaCreatives = [
    { id: 1, src: image1, alt: 'Creative 1' },
    { id: 2, src: image2, alt: 'Creative 2' },
    { id: 3, src: image3, alt: 'Creative 3' },
    { id: 4, src: image4, alt: 'Creative 4' },
    { id: 5, src: image5, alt: 'Creative 5' },
    { id: 6, src: image6, alt: 'Creative 6' },
    { id: 7, src: image7, alt: 'Creative 7' },
    { id: 8, src: image8, alt: 'Creative 8' },
    { id: 9, src: image9, alt: 'Creative 9' },
    { id: 10, src: image10, alt: 'Creative 10' },
  ];

  const marketingAds = [
    { id: 1, src: marketing1, alt: 'Marketing Example 1' },
    { id: 2, src: marketing2, alt: 'Marketing Example 2' },
    { id: 3, src: marketing3, alt: 'Marketing Example 3' },
  ];

  console.log('Marketing Ads:', marketingAds); // Debug log

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= canvaCreatives.length - 2 ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? canvaCreatives.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="marketing-portfolio">
      {/* Marketing Ads Section */}
      <section className="portfolio-section">
        <h2>Ads That Drive Real Business Growth        </h2>
        <div className="ads-container">
          {marketingAds.map((ad) => {
            console.log('Rendering ad:', ad); // Debug log
            return (
              <div key={ad.id} className="ad-item">
                <img src={ad.src} alt={ad.alt} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Canva Creatives Section */}
      <section className="portfolio-section">
        <h2>Creative Designs That Convert</h2>
        <div className="slideshow-container">
          <button className="slide-arrow prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          
          <div className="slide-images">
            <div className="slide-image">
              <img 
                src={canvaCreatives[currentIndex].src} 
                alt={canvaCreatives[currentIndex].alt} 
              />
            </div>
            {currentIndex + 1 < canvaCreatives.length && (
              <div className="slide-image">
                <img 
                  src={canvaCreatives[currentIndex + 1].src} 
                  alt={canvaCreatives[currentIndex + 1].alt} 
                />
              </div>
            )}
          </div>

          <button className="slide-arrow next" onClick={nextSlide}>
            <FaArrowRight />
          </button>

          <div className="slide-indicators">
            {Array.from({ length: Math.ceil(canvaCreatives.length / 2) }).map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentIndex / 2 ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index * 2)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPortfolio;
