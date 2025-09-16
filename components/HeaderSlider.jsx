import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Élégance & Tradition",
      subtitle: "Découvrez nos Abayas uniques",
      offer: "Nouveautés exclusives",
      buttonText: "Voir la collection",
      imgSrc: assets.product_2,
    },
    {
      id: 2,
      title: "Art des Senteurs Orientales",
      subtitle: "Encens & Air Fresheners",
      offer: "Atmosphère raffinée",
      buttonText: "Découvrir",
      imgSrc: assets.product_3,
    },
    {
      id: 3,
      title: "Parfums d'Exception",
      subtitle: "Charme et Raffinement",
      offer: "-20% sur Kashkha",
      buttonText: "Acheter",
      imgSrc: assets.product_6,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-xl my-8" style={{ backgroundColor: '#F6F7EC' }}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex items-center justify-between px-6 md:px-12 min-w-full h-full"
          >
            {/* Contenu texte */}
            <div className="flex-1 max-w-md">
              <div 
                className="text-xs md:text-sm font-medium px-3 py-1 rounded-full inline-block mb-3"
                style={{ backgroundColor: '#E16939', color: 'white' }}
              >
                {slide.offer}
              </div>
              
              <h1 
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight"
                style={{ color: '#131837' }}
              >
                {slide.title}
              </h1>
              
              <p 
                className="text-sm md:text-base mb-4 opacity-80"
                style={{ color: '#131837' }}
              >
                {slide.subtitle}
              </p>

              <button 
                className="px-6 md:px-8 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#E16939' }}
              >
                {slide.buttonText}
              </button>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 ml-4">
              <Image
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-lg"
                width={192}
                height={192}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white bg-opacity-50 hover:bg-opacity-70"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows (optionnel) */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
      >
        <span className="text-white font-bold">‹</span>
      </button>
      
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % sliderData.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
      >
        <span className="text-white font-bold">›</span>
      </button>
    </div>
  );
};

export default HeaderSlider;