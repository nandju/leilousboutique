import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
const sliderData = [
  {
    id: 1,
    title: "Élégance & Tradition - Découvrez nos Abayas uniques",
    offer: "Nouveautés exclusives disponibles dès aujourd'hui",
    buttonText1: "Voir la collection",
    buttonText2: "En savoir plus",
    imgSrc: assets.product_2, // Image d'abaya
  },
  {
    id: 2,
    title: "Plongez dans l’Art des Senteurs Orientales",
    offer: "Encens & Air Fresheners pour une atmosphère raffinée",
    buttonText1: "Découvrir",
    buttonText2: "Explorer les senteurs",
    imgSrc: assets.product_3, // Image encens/parfum
  },
  {
    id: 3,
    title: "Charme et Raffinement – Nos Parfums d’Exception",
    offer: "Offre spéciale -20% sur la gamme Kashkha",
    buttonText1: "Acheter maintenant",
    buttonText2: "Voir les offres",
    imgSrc: assets.product_6, // Image parfum
  },
];


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
            style={{ backgroundColor: '#F6F7EC' }}
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p 
                className="md:text-base pb-1 font-medium"
                style={{ color: '#E16939' }}
              >
                {slide.offer}
              </p>
              <h1 
                className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold"
                style={{ color: '#131837' }}
              >
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button 
                  className="md:px-10 px-7 md:py-2.5 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#E16939' }}
                >
                  {slide.buttonText1}
                </button>
                <button 
                  className="group flex items-center gap-2 px-6 py-2.5 font-medium transition-colors duration-300"
                  style={{ color: '#131837' }}
                >
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="icône flèche" />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Diapositive ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "w-6" : "hover:scale-110"
            }`}
            style={{
              backgroundColor: currentSlide === index ? '#E16939' : '#131837',
              opacity: currentSlide === index ? 1 : 0.3
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;