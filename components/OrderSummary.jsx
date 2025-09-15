import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {

  const { currency, router, getCartCount, getCartAmount } = useAppContext()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {

  }

  useEffect(() => {
    fetchUserAddresses();
  }, [])

  return (
    <div 
      className="w-full md:w-96 p-5"
      style={{ backgroundColor: '#F6F7EC' }}
    >
      <h2 
        className="text-xl md:text-2xl font-medium"
        style={{ color: '#131837' }}
      >
        Résumé de Commande
      </h2>
      <hr 
        className="my-5"
        style={{ borderColor: '#131837', borderWidth: '1px', opacity: 0.3 }}
      />
      <div className="space-y-6">
        <div>
          <label 
            className="text-base font-medium uppercase block mb-2"
            style={{ color: '#131837' }}
          >
            Sélectionner une Adresse
          </label>
          <div className="relative inline-block w-full text-sm border" style={{ borderColor: '#131837' }}>
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white focus:outline-none"
              style={{ color: '#131837' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Sélectionner une adresse"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#131837"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul 
                className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5"
                style={{ borderColor: '#131837' }}
              >
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer transition-colors duration-300"
                    style={{ color: '#131837' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#F6F7EC'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 cursor-pointer text-center transition-colors duration-300 font-medium"
                  style={{ color: '#E16939' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F6F7EC'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  + Ajouter une Nouvelle Adresse
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label 
            className="text-base font-medium uppercase block mb-2"
            style={{ color: '#131837' }}
          >
            Code Promo
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Entrer le code promo"
              className="flex-grow w-full outline-none p-2.5 border"
              style={{ 
                color: '#131837', 
                borderColor: '#131837',
                borderWidth: '1px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#E16939'}
              onBlur={(e) => e.target.style.borderColor = '#131837'}
            />
            <button 
              className="text-white px-9 py-2 transition-all duration-300 hover:scale-105 hover:shadow-md rounded"
              style={{ backgroundColor: '#E16939' }}
            >
              Appliquer
            </button>
          </div>
        </div>

        <hr 
          className="my-5"
          style={{ borderColor: '#131837', borderWidth: '1px', opacity: 0.3 }}
        />

        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p 
              className="uppercase"
              style={{ color: '#131837' }}
            >
              Articles {getCartCount()}
            </p>
            <p style={{ color: '#131837' }}>{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between">
            <p style={{ color: '#131837', opacity: 0.7 }}>Frais de Livraison</p>
            <p 
              className="font-medium"
              style={{ color: '#131837' }}
            >
              Gratuit
            </p>
          </div>
          <div className="flex justify-between">
            <p style={{ color: '#131837', opacity: 0.7 }}>Taxes (2%)</p>
            <p 
              className="font-medium"
              style={{ color: '#131837' }}
            >
              {currency}{Math.floor(getCartAmount() * 0.02)}
            </p>
          </div>
          <div 
            className="flex justify-between text-lg md:text-xl font-medium border-t pt-3"
            style={{ borderColor: '#131837', borderWidth: '1px', opacity: 0.3 }}
          >
            <p style={{ color: '#131837' }}>Total</p>
            <p style={{ color: '#131837' }}>{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}</p>
          </div>
        </div>
      </div>

      <button 
        onClick={createOrder} 
        className="w-full text-white py-3 mt-5 transition-all duration-300 hover:scale-105 hover:shadow-md font-medium rounded"
        style={{ backgroundColor: '#E16939' }}
      >
        Passer Commande
      </button>
    </div>
  );
};

export default OrderSummary;