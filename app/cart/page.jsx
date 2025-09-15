'use client'
import React from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {

  const { products, router, cartItems, addToCart, updateCartQuantity, getCartCount } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20">
        <div className="flex-1">
          <div 
            className="flex items-center justify-between mb-8 border-b pb-6"
            style={{ borderBottomColor: '#131837', borderBottomWidth: '1px', borderBottomOpacity: 0.3 }}
          >
            <p 
              className="text-2xl md:text-3xl"
              style={{ color: '#131837', opacity: 0.8 }}
            >
              Votre <span className="font-medium" style={{ color: '#E16939' }}>Panier</span>
            </p>
            <p 
              className="text-lg md:text-xl"
              style={{ color: '#131837', opacity: 0.7 }}
            >
              {getCartCount()} Articles
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="text-left">
                <tr>
                  <th 
                    className="text-nowrap pb-6 md:px-4 px-1 font-medium"
                    style={{ color: '#131837' }}
                  >
                    Détails du Produit
                  </th>
                  <th 
                    className="pb-6 md:px-4 px-1 font-medium"
                    style={{ color: '#131837' }}
                  >
                    Prix
                  </th>
                  <th 
                    className="pb-6 md:px-4 px-1 font-medium"
                    style={{ color: '#131837' }}
                  >
                    Quantité
                  </th>
                  <th 
                    className="pb-6 md:px-4 px-1 font-medium"
                    style={{ color: '#131837' }}
                  >
                    Sous-total
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((itemId) => {
                  const product = products.find(product => product._id === itemId);

                  if (!product || cartItems[itemId] <= 0) return null;

                  return (
                    <tr key={itemId}>
                      <td className="flex items-center gap-4 py-4 md:px-4 px-1">
                        <div>
                          <div 
                            className="rounded-lg overflow-hidden p-2"
                            style={{ backgroundColor: '#F6F7EC' }}
                          >
                            <Image
                              src={product.image[0]}
                              alt={product.name}
                              className="w-16 h-auto object-cover mix-blend-multiply"
                              width={1280}
                              height={720}
                            />
                          </div>
                          <button
                            className="md:hidden text-xs mt-1 transition-colors duration-300"
                            style={{ color: '#E16939' }}
                            onClick={() => updateCartQuantity(product._id, 0)}
                          >
                            Supprimer
                          </button>
                        </div>
                        <div className="text-sm hidden md:block">
                          <p style={{ color: '#131837' }}>{product.name}</p>
                          <button
                            className="text-xs mt-1 transition-colors duration-300"
                            style={{ color: '#E16939' }}
                            onClick={() => updateCartQuantity(product._id, 0)}
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                      <td 
                        className="py-4 md:px-4 px-1"
                        style={{ color: '#131837', opacity: 0.8 }}
                      >
                        {product.offerPrice}€
                      </td>
                      <td className="py-4 md:px-4 px-1">
                        <div className="flex items-center md:gap-2 gap-1">
                          <button onClick={() => updateCartQuantity(product._id, cartItems[itemId] - 1)}>
                            <Image
                              src={assets.decrease_arrow}
                              alt="flèche diminuer"
                              className="w-4 h-4 transition-transform hover:scale-110"
                            />
                          </button>
                          <input 
                            onChange={e => updateCartQuantity(product._id, Number(e.target.value))} 
                            type="number" 
                            value={cartItems[itemId]} 
                            className="w-8 border text-center appearance-none rounded"
                            style={{ 
                              borderColor: '#131837', 
                              color: '#131837',
                              borderWidth: '1px'
                            }}
                          />
                          <button onClick={() => addToCart(product._id)}>
                            <Image
                              src={assets.increase_arrow}
                              alt="flèche augmenter"
                              className="w-4 h-4 transition-transform hover:scale-110"
                            />
                          </button>
                        </div>
                      </td>
                      <td 
                        className="py-4 md:px-4 px-1"
                        style={{ color: '#131837', opacity: 0.8 }}
                      >
                        {(product.offerPrice * cartItems[itemId]).toFixed(2)}€
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button 
            onClick={()=> router.push('/all-products')} 
            className="group flex items-center mt-6 gap-2 transition-all duration-300 hover:gap-3"
            style={{ color: '#E16939' }}
          >
            <Image
              className="group-hover:-translate-x-1 transition"
              src={assets.arrow_right_icon_colored}
              alt="icône flèche droite colorée"
            />
            Continuer les achats
          </button>
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Cart;