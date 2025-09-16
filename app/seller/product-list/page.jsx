
'use client'
import React, { useEffect, useState } from "react";
import { Search, Filter, Package } from "lucide-react";

// Simulation des assets et données
const assets = {
  redirect_icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17l9.2-9.2M17 17V7H7'/%3E%3C/svg%3E"
};

const productsDummyData = [
  {
    _id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    category: 'Smartphones',
    price: 1299.99,
    offerPrice: 1199.99,
    image: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop']
  },
  {
    _id: '2',
    name: 'AirPods Pro 2ème génération',
    category: 'Écouteurs',
    price: 279.99,
    offerPrice: 249.99,
    image: ['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop']
  },
  {
    _id: '3',
    name: 'MacBook Pro 14" M3 Pro',
    category: 'Ordinateurs portables',
    price: 2499.99,
    offerPrice: 2299.99,
    image: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop']
  }
];

// Simulation du contexte
const useAppContext = () => ({
  router: {
    push: (path) => console.log(`Navigation to: ${path}`)
  }
});

// Composant Loading simulé
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200" 
         style={{ borderTopColor: '#E16939' }}></div>
  </div>
);

// Composant Footer simulé
const Footer = () => (
  <div className="p-4 text-center border-t border-gray-200" style={{ backgroundColor: '#F6F7EC', color: '#131837' }}>
    <p className="text-sm opacity-70">© 2024 Mon Commerce. Tous droits réservés.</p>
  </div>
);

const ProductList = () => {
  const { router } = useAppContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Nouveaux états pour les fonctionnalités ajoutées
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  // Nouvelles fonctionnalités de filtrage
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between" style={{ backgroundColor: '#F6F7EC' }}>
      {loading ? <Loading /> : (
        <div className="w-full md:p-10 p-4">
          {/* En-tête amélioré */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939' }}>
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#131837' }}>
                  Tous les Produits
                </h2>
                <p className="opacity-70 text-sm" style={{ color: '#131837' }}>
                  {products.length} produit{products.length > 1 ? 's' : ''} au total
                </p>
              </div>
            </div>

            {/* Barre de recherche et filtre ajoutés */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" 
                        style={{ color: '#131837' }} />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                  style={{ color: '#131837' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" 
                        style={{ color: '#131837' }} />
                <select
                  className="pl-10 pr-8 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors min-w-40"
                  style={{ color: '#131837' }}
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'Toutes les catégories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tableau original avec améliorations de style */}
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-xl bg-white border shadow-sm"
               style={{ borderColor: '#131837', borderOpacity: 0.1 }}>
            <table className="table-fixed w-full overflow-hidden">
              <thead className="text-sm text-left" 
                     style={{ backgroundColor: '#F6F7EC', color: '#131837' }}>
                <tr>
                  <th className="w-2/3 md:w-2/5 px-4 py-4 font-semibold truncate">Produit</th>
                  <th className="px-4 py-4 font-semibold truncate max-sm:hidden">Catégorie</th>
                  <th className="px-4 py-4 font-semibold truncate">Prix</th>
                  <th className="px-4 py-4 font-semibold truncate max-sm:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm" style={{ color: '#131837' }}>
                {filteredProducts.map((product, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50/50 transition-colors"
                      style={{ borderColor: '#131837', borderOpacity: 0.1 }}>
                    <td className="md:px-4 pl-2 md:pl-4 py-4 flex items-center space-x-3 truncate">
                      <div className="rounded-lg p-2" style={{ backgroundColor: '#F6F7EC' }}>
                        <img
                          src={product.image[0]}
                          alt="product Image"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <span className="truncate w-full font-medium">
                        {product.name}
                      </span>
                    </td>
                    <td className="px-4 py-4 max-sm:hidden">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                            style={{ backgroundColor: '#F6F7EC', color: '#131837' }}>
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold" style={{ color: '#E16939' }}>
                          €{product.offerPrice}
                        </span>
                        {product.price !== product.offerPrice && (
                          <span className="text-xs line-through opacity-50">
                            €{product.price}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 max-sm:hidden">
                      <button 
                        onClick={() => router.push(`/product/${product._id}`)} 
                        className="flex items-center gap-2 px-3 md:px-4 py-2 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: '#E16939' }}
                      >
                        <span className="hidden md:block">Voir</span>
                        <img
                          className="h-3.5 w-3.5"
                          src={assets.redirect_icon}
                          alt="redirect_icon"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Message si aucun produit trouvé */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: '#131837' }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#131837' }}>
                  Aucun produit trouvé
                </h3>
                <p className="opacity-60" style={{ color: '#131837' }}>
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </div>

          {/* Statistiques ajoutées */}
          {filteredProducts.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939', opacity: 0.1 }}>
                    <Package className="w-5 h-5" style={{ color: '#E16939' }} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                      Total Produits
                    </p>
                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                      {products.length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939', opacity: 0.1 }}>
                    <Package className="w-5 h-5" style={{ color: '#E16939' }} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                      Catégories
                    </p>
                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                      {new Set(products.map(p => p.category)).size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939', opacity: 0.1 }}>
                    <Package className="w-5 h-5" style={{ color: '#E16939' }} />
                  </div>
                  <div>
                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                      Valeur Moyenne
                    </p>
                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                      €{Math.round(products.reduce((sum, p) => sum + p.offerPrice, 0) / products.length)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductList;