"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-0 border-b-2" 
         style={{ 
           backgroundColor: '#F6F7EC', 
           borderBottomColor: '#131837',
           color: '#131837'
         }}>
      <Image
        className="cursor-pointer w-28 md:w-32 transition-transform hover:scale-105"
        onClick={() => router.push('/')}
        src={assets.logo_truth_sans_fond}
        alt="logo"
      />
      
      <div className="flex items-center gap-6 lg:gap-10 max-md:hidden">
        <Link 
          href="/" 
          className="font-medium transition-colors duration-300 hover:opacity-80 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          style={{ 
            color: '#131837',
            '--after-bg-color': '#E16939'
          }}
        >
          Accueil
        </Link>
        <Link 
          href="/all-products" 
          className="font-medium transition-colors duration-300 hover:opacity-80 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          style={{ 
            color: '#131837'
          }}
        >
          Boutique
        </Link>
        <Link 
          href="/" 
          className="font-medium transition-colors duration-300 hover:opacity-80 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          style={{ 
            color: '#131837'
          }}
        >
          À Propos
        </Link>
        <Link 
          href="/" 
          className="font-medium transition-colors duration-300 hover:opacity-80 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          style={{ 
            color: '#131837'
          }}
        >
          Contact
        </Link>

        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-sm font-medium border-2 px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{
              color: '#F6F7EC',
              backgroundColor: '#E16939',
              borderColor: '#E16939'
            }}
          >
            Tableau de Bord Vendeur
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-6">
        <button className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20" 
                style={{ backgroundColor: 'transparent' }}>
          <Image className="w-5 h-5" src={assets.search_icon} alt="icône de recherche" />
        </button>
        <button 
          className="flex items-center gap-3 font-medium transition-all duration-300 hover:opacity-80 px-3 py-2 rounded-lg"
          style={{ color: '#131837' }}
        >
          <Image className="w-5 h-5" src={assets.user_icon} alt="icône utilisateur" />
          Compte
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs font-medium border-2 px-4 py-2 rounded-full transition-all duration-300"
            style={{
              color: '#F6F7EC',
              backgroundColor: '#E16939',
              borderColor: '#E16939'
            }}
          >
            Vendeur
          </button>
        )}
        <button 
          className="flex items-center gap-2 font-medium transition-all duration-300 hover:opacity-80"
          style={{ color: '#131837' }}
        >
          <Image className="w-4 h-4" src={assets.user_icon} alt="icône utilisateur" />
          Compte
        </button>
      </div>

      <style jsx>{`
        .navbar-link::after {
          background-color: #E16939;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;