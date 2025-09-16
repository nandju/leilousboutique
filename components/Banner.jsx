import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
    {/* Version Desktop */}
    <div 
      className="hidden md:flex items-center justify-between px-12 py-8 my-8 rounded-2xl overflow-hidden h-56"
      style={{ backgroundColor: '#F6F7EC' }}
    >
      {/* Image gauche */}
      <div className="flex-shrink-0">
        <Image
          src={assets.product_5}
          alt="Produit vedette"
          className="w-36 h-36 object-cover rounded-lg"
          width={144}
          height={144}
        />
      </div>

      {/* Contenu central */}
      <div className="flex-1 text-center px-8">
        <h2 
          className="text-2xl lg:text-3xl font-bold mb-2 leading-tight"
          style={{ color: '#131837' }}
        >
          Élégance & Raffinement
        </h2>
        <p 
          className="text-base mb-4 max-w-md mx-auto"
          style={{ color: '#131837', opacity: 0.8 }}
        >
          Abayas, Parfums et Encens pour sublimer votre style
        </p>
        
        <button 
          className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          style={{ backgroundColor: '#E16939' }}
        >
          Découvrir
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Image droite */}
      <div className="flex-shrink-0">
        <Image
          src={assets.product_4}
          alt="Produit collection"
          className="w-36 h-36 object-cover rounded-lg"
          width={144}
          height={144}
        />
      </div>
    </div>

    {/* Version Mobile */}
    <div 
      className="md:hidden flex flex-col items-center text-center px-4 py-6 my-8 rounded-2xl"
      style={{ backgroundColor: '#F6F7EC' }}
    >
      {/* Image principale */}
      <div className="mb-4">
        <Image
          src={assets.product_2}
          alt="Produit vedette"
          className="w-32 h-32 object-cover rounded-lg mx-auto"
          width={128}
          height={128}
        />
      </div>

      {/* Contenu */}
      <div>
        <h2 
          className="text-xl font-bold mb-2 leading-tight"
          style={{ color: '#131837' }}
        >
          Élégance & Raffinement
        </h2>
        <p 
          className="text-sm mb-4 max-w-xs mx-auto"
          style={{ color: '#131837', opacity: 0.8 }}
        >
          Abayas, Parfums et Encens pour sublimer votre style
        </p>
        
        <button 
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          style={{ backgroundColor: '#E16939' }}
        >
          Découvrir
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    </div>
  );
};

export default Banner;