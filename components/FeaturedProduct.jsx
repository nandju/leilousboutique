import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.shampoing, // Image d'une abaya
    title: "Élégance Intemporelle",
    description: "Découvrez nos Abayas raffinées qui allient tradition et modernité.",
  },
  {
    id: 2,
    image: assets.apres_shampoing, // Image d'un parfum
    // image: assets.shampoing,
    title: "Senteurs de Prestige",
    description: "Des parfums uniques qui subliment votre personnalité au quotidien.",
  },
  {
    id: 3,
    image: assets.masque, // Image d'encens ou d'air freshener
    // image: assets.shampoing,
    title: "Ambiance Envoûtante",
    description: "Encens et Air Fresheners pour créer une atmosphère chaleureuse et apaisante.",
  },
];


const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p 
          className="text-3xl font-medium"
          style={{ color: '#131837' }}
        >
          Produits Vedettes
        </p>
        <div 
          className="w-28 h-0.5 mt-2"
          style={{ backgroundColor: '#E16939' }}
        ></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-[400px] object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button 
                className="flex items-center gap-1.5 px-4 py-2 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#E16939' }}
              >
                Acheter maintenant <Image className="h-3 w-3" src={assets.redirect_icon} alt="Icône de redirection" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;