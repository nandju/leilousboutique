import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.shampoing,
    title: "Élégance Intemporelle",
    description: "Abayas raffinées tradition & modernité",
  },
  {
    id: 2,
    image: assets.apres_shampoing,
    title: "Senteurs de Prestige",
    description: "Parfums uniques qui subliment votre personnalité",
  },
  {
    id: 3,
    image: assets.masque,
    title: "Ambiance Envoûtante",
    description: "Encens & Air Fresheners pour atmosphère apaisante",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-10">
      {/* En-tête compact */}
      <div className="text-center mb-8">
        <h2 
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: '#131837' }}
        >
          Produits Vedettes
        </h2>
        <div 
          className="w-16 h-0.5 mx-auto mt-2"
          style={{ backgroundColor: '#E16939' }}
        />
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
        {products.map(({ id, image, title, description }) => (
          <div 
            key={id} 
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image de fond */}
            <div className="relative h-64 md:h-72">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Contenu superposé */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-lg md:text-xl mb-2">
                {title}
              </h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-2">
                {description}
              </p>
              
              {/* Bouton d'action */}
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                style={{ backgroundColor: '#E16939' }}
              >
                Explorer
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

            {/* Badge catégorie (optionnel) */}
            <div 
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: '#E16939' }}
            >
              Nouveauté
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;