'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AddProduct = () => {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Écouteurs');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p 
            className="text-base font-medium"
            style={{ color: '#131837' }}
          >
            Images du Produit
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">

            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input onChange={(e) => {
                  const updatedFiles = [...files];
                  updatedFiles[index] = e.target.files[0];
                  setFiles(updatedFiles);
                }} type="file" id={`image${index}`} hidden />
                <Image
                  key={index}
                  className="max-w-24 cursor-pointer rounded-lg transition-transform hover:scale-105"
                  src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                  alt="zone de téléchargement"
                  width={100}
                  height={100}
                />
              </label>
            ))}

          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label 
            className="text-base font-medium" 
            htmlFor="product-name"
            style={{ color: '#131837' }}
          >
            Nom du Produit
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Saisissez ici"
            className="outline-none md:py-2.5 py-2 px-3 rounded border transition-colors duration-300"
            style={{ 
              borderColor: '#131837',
              borderWidth: '1px',
              borderOpacity: 0.4,
              color: '#131837'
            }}
            onFocus={(e) => e.target.style.borderColor = '#E16939'}
            onBlur={(e) => e.target.style.borderColor = '#131837'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
            style={{ color: '#131837' }}
          >
            Description du Produit
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border resize-none transition-colors duration-300"
            style={{ 
              borderColor: '#131837',
              borderWidth: '1px',
              borderOpacity: 0.4,
              color: '#131837'
            }}
            onFocus={(e) => e.target.style.borderColor = '#E16939'}
            onBlur={(e) => e.target.style.borderColor = '#131837'}
            placeholder="Saisissez ici"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label 
              className="text-base font-medium" 
              htmlFor="category"
              style={{ color: '#131837' }}
            >
              Catégorie
            </label>
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border transition-colors duration-300"
              style={{ 
                borderColor: '#131837',
                borderWidth: '1px',
                borderOpacity: 0.4,
                color: '#131837'
              }}
              onFocus={(e) => e.target.style.borderColor = '#E16939'}
              onBlur={(e) => e.target.style.borderColor = '#131837'}
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={category}
            >
              <option value="Écouteurs">Écouteurs</option>
              <option value="Casques">Casques</option>
              <option value="Montres">Montres</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Ordinateurs portables">Ordinateurs portables</option>
              <option value="Appareils photo">Appareils photo</option>
              <option value="Accessoires">Accessoires</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label 
              className="text-base font-medium" 
              htmlFor="product-price"
              style={{ color: '#131837' }}
            >
              Prix du Produit
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border transition-colors duration-300"
              style={{ 
                borderColor: '#131837',
                borderWidth: '1px',
                borderOpacity: 0.4,
                color: '#131837'
              }}
              onFocus={(e) => e.target.style.borderColor = '#E16939'}
              onBlur={(e) => e.target.style.borderColor = '#131837'}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label 
              className="text-base font-medium" 
              htmlFor="offer-price"
              style={{ color: '#131837' }}
            >
              Prix Promotion
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border transition-colors duration-300"
              style={{ 
                borderColor: '#131837',
                borderWidth: '1px',
                borderOpacity: 0.4,
                color: '#131837'
              }}
              onFocus={(e) => e.target.style.borderColor = '#E16939'}
              onBlur={(e) => e.target.style.borderColor = '#131837'}
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="px-8 py-2.5 text-white font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: '#E16939' }}
        >
          AJOUTER
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default AddProduct;