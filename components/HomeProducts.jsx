import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14">
      <p 
        className="text-2xl font-medium text-left w-full"
        style={{ color: '#131837' }}
      >
        Produits populaires
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button 
        onClick={() => { router.push('/all-products') }} 
        className="px-12 py-2.5 border-2 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
        style={{
          borderColor: '#131837',
          color: '#131837',
          backgroundColor: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#131837';
          e.target.style.color = '#F6F7EC';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#131837';
        }}
      >
        Voir plus
      </button>
    </div>
  );
};

export default HomeProducts;