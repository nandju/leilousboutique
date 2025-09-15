import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 my-16 rounded-xl overflow-hidden"
      style={{ backgroundColor: '#F6F7EC' }}
    >
      <Image
        className="max-w-56"
        src={assets.product_5}
        alt="image de haut-parleur jbl"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 
          className="text-2xl md:text-3xl font-semibold max-w-[290px]"
          style={{ color: '#131837' }}
        >
          Élégance & Raffinement au Quotidien
        </h2>
        <p 
          className="max-w-[343px] font-medium"
          style={{ color: '#131837', opacity: 0.7 }}
        >
          Découvrez nos Abayas, Parfums et Encens pour sublimer votre style et votre ambiance.
        </p>
        <button 
          className="group flex items-center justify-center gap-1 px-12 py-2.5 rounded text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: '#E16939' }}
        >
          Découvrir maintenant
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="icône flèche blanche" />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.product_4}
        alt="image de manette md"
      />
      <Image
        className="md:hidden"
        src={assets.product_2}
        alt="image de manette sm"
      />
    </div>
  );
};

export default Banner;