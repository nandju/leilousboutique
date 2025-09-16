import React from 'react';
import Link from 'next/link';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Store } from 'lucide-react';

const SideBar = () => {
    const pathname = usePathname();
    const menuItems = [
        { name: 'Ajouter Produit', path: '/seller', icon: assets.add_icon },
        { name: 'Liste Produits', path: '/seller/product-list', icon: assets.product_list_icon },
        { name: 'Commandes', path: '/seller/orders', icon: assets.order_icon },
    ];

    return (
        <div className='lg:w-64 md:w-20 w-16 border-r min-h-screen text-base flex flex-col shadow-sm transition-all duration-300'
             style={{ backgroundColor: '#F6F7EC', borderColor: '#131837', borderOpacity: 0.1 }}>
            
            {/* En-tête */}
            {/* <div className="p-4 border-b" style={{ borderColor: '#131837', borderOpacity: 0.1 }}>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#E16939' }}>
                        <Store className="w-5 h-5 text-white" />
                    </div>
                    <div className="lg:block hidden overflow-hidden">
                        <h3 className="font-semibold text-sm truncate" style={{ color: '#131837' }}>
                            Mon Commerce
                        </h3>
                        <p className="text-xs opacity-70 truncate" style={{ color: '#131837' }}>
                            Tableau de bord
                        </p>
                    </div>
                </div>
            </div> */}

            {/* Menu Navigation */}
            <div className="flex-1 py-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link href={item.path} key={item.name} passHref>
                            <div
                                className={`flex items-center py-3 px-3 lg:px-4 gap-3 mx-2 mb-1 rounded-xl transition-all duration-200 group relative ${
                                    isActive
                                        ? "shadow-md transform scale-105"
                                        : "hover:bg-white hover:shadow-sm"
                                }`}
                                style={{
                                    backgroundColor: isActive ? '#E16939' : 'transparent',
                                    color: isActive ? 'white' : '#131837'
                                }}
                            >
                                {/* Icône avec meilleure visibilité */}
                                <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-200 ${
                                    isActive ? 'bg-white bg-opacity-20' : 'bg-white shadow-sm'
                                }`}>
                                    <Image
                                        src={item.icon}
                                        alt={`${item.name.toLowerCase()}_icon`}
                                        className="w-5 h-5 object-contain"
                                        width={20}
                                        height={20}
                                        style={{ 
                                            filter: isActive 
                                                ? 'brightness(0) invert(1)' 
                                                : 'brightness(1) contrast(1.2) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                {/* Texte visible sur grands écrans */}
                                <p className='lg:block hidden font-medium text-sm truncate flex-1'>
                                    {item.name}
                                </p>

                                {/* Tooltip pour petits écrans */}
                                <div className="lg:hidden absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                    {item.name}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Statistiques rapides - visible uniquement sur grands écrans */}
            {/* <div className="lg:block hidden p-4 border-t" style={{ borderColor: '#131837', borderOpacity: 0.1 }}>
                <div className="bg-white p-3 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-xs mb-2" style={{ color: '#131837' }}>
                        Résumé
                    </h4>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                            <span style={{ color: '#131837' }}>Produits</span>
                            <span className="font-semibold px-2 py-1 rounded-full bg-orange-50" style={{ color: '#E16939' }}>
                                24
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span style={{ color: '#131837' }}>Commandes</span>
                            <span className="font-semibold px-2 py-1 rounded-full bg-orange-50" style={{ color: '#E16939' }}>
                                12
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SideBar;