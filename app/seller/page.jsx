
'use client'
import React, { useState } from "react";
import { Upload, Package, Tag, DollarSign } from "lucide-react";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Écouteurs');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ files, name, description, category, price, offerPrice });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F7EC' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#131837' }}>
            Ajouter un Nouveau Produit
          </h1>
          <p className="text-lg opacity-70" style={{ color: '#131837' }}>
            Complétez les informations ci-dessous pour ajouter votre produit
          </p>
        </div>

        <div className="space-y-8">
          {/* Section Images */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-2 rounded-lg" 
                style={{ backgroundColor: '#E16939' }}
              >
                <Upload className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold" style={{ color: '#131837' }}>
                Images du Produit
              </h2>
            </div>
            <p className="text-sm mb-4 opacity-70" style={{ color: '#131837' }}>
              Ajoutez jusqu'à 4 images de votre produit (formats acceptés: JPG, PNG)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <label key={index} htmlFor={`image${index}`} className="cursor-pointer group">
                  <input 
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }} 
                    type="file" 
                    id={`image${index}`} 
                    accept="image/*"
                    className="hidden" 
                  />
                  <div className="aspect-square rounded-xl border-2 border-dashed transition-all duration-300 group-hover:border-opacity-70 flex items-center justify-center overflow-hidden"
                       style={{ borderColor: '#131837', borderOpacity: 0.3 }}>
                    {files[index] ? (
                      <img
                        src={URL.createObjectURL(files[index])}
                        alt={`Produit ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Upload className="w-8 h-8 mx-auto mb-2 opacity-40" style={{ color: '#131837' }} />
                        <p className="text-xs opacity-60" style={{ color: '#131837' }}>
                          Cliquez pour ajouter
                        </p>
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Section Informations Produit */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-2 rounded-lg" 
                style={{ backgroundColor: '#E16939' }}
              >
                <Package className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold" style={{ color: '#131837' }}>
                Informations du Produit
              </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="product-name"
                  style={{ color: '#131837' }}
                >
                  Nom du Produit *
                </label>
                <input
                  id="product-name"
                  type="text"
                  placeholder="Ex: iPhone 15 Pro Max"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  style={{ color: '#131837' }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="product-description"
                  style={{ color: '#131837' }}
                >
                  Description du Produit *
                </label>
                <textarea
                  id="product-description"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 resize-none transition-all duration-300"
                  style={{ color: '#131837' }}
                  placeholder="Décrivez votre produit en détail..."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Section Catégorie et Prix */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-2 rounded-lg" 
                style={{ backgroundColor: '#E16939' }}
              >
                <Tag className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold" style={{ color: '#131837' }}>
                Catégorie et Prix
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="category"
                  style={{ color: '#131837' }}
                >
                  Catégorie *
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  style={{ color: '#131837' }}
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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

              <div>
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="product-price"
                  style={{ color: '#131837' }}
                >
                  Prix de Vente (€) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" style={{ color: '#131837' }} />
                  <input
                    id="product-price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="99.99"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    style={{ color: '#131837' }}
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="offer-price"
                  style={{ color: '#131837' }}
                >
                  Prix Promotionnel (€)
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" style={{ color: '#131837' }} />
                  <input
                    id="offer-price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="79.99"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    style={{ color: '#131837' }}
                    onChange={(e) => setOfferPrice(e.target.value)}
                    value={offerPrice}
                  />
                </div>
                <p className="text-xs mt-1 opacity-60" style={{ color: '#131837' }}>
                  Optionnel - laissez vide si aucune promotion
                </p>
              </div>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-center pt-4">
            <button 
              type="button" 
              onClick={handleSubmit}
              className="px-12 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
              style={{ backgroundColor: '#E16939' }}
            >
              Ajouter le Produit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;