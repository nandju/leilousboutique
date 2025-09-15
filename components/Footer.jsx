import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F6F7EC' }}>
      <div 
        className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b"
        style={{ 
          borderBottomColor: '#131837',
          borderBottomWidth: '1px',
          borderBottomOpacity: 0.2,
          color: '#131837'
        }}
      >
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo_truth_sans_fond} alt="logo" />
          <p 
            className="mt-6 text-sm"
            style={{ color: '#131837', opacity: 0.7 }}
          >
            Leïlous Boutique vous propose une sélection élégante d’Abayas, de parfums raffinés, 
            d’encens et de senteurs orientales.  
            Notre mission : allier tradition et modernité pour sublimer votre style et votre quotidien.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 
              className="font-medium mb-5"
              style={{ color: '#131837' }}
            >
              Navigation
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a 
                  className="hover:underline transition-all duration-300"
                  style={{ color: '#131837', opacity: 0.8 }}
                  onMouseEnter={(e) => e.target.style.color = '#E16939'}
                  onMouseLeave={(e) => e.target.style.color = '#131837'}
                  href="#"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  className="hover:underline transition-all duration-300"
                  style={{ color: '#131837', opacity: 0.8 }}
                  onMouseEnter={(e) => e.target.style.color = '#E16939'}
                  onMouseLeave={(e) => e.target.style.color = '#131837'}
                  href="#"
                >
                  Parfums & Encens
                </a>
              </li>
              <li>
                <a 
                  className="hover:underline transition-all duration-300"
                  style={{ color: '#131837', opacity: 0.8 }}
                  onMouseEnter={(e) => e.target.style.color = '#E16939'}
                  onMouseLeave={(e) => e.target.style.color = '#131837'}
                  href="#"
                >
                  Nous contacter
                </a>
              </li>
              <li>
                <a 
                  className="hover:underline transition-all duration-300"
                  style={{ color: '#131837', opacity: 0.8 }}
                  onMouseEnter={(e) => e.target.style.color = '#E16939'}
                  onMouseLeave={(e) => e.target.style.color = '#131837'}
                  href="#"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 
              className="font-medium mb-5"
              style={{ color: '#131837' }}
            >
              Contactez-nous
            </h2>
            <div 
              className="text-sm space-y-2"
              style={{ color: '#131837', opacity: 0.8 }}
            >
              <p>+33-1-23-45-67-89</p>
              <p>contact@votresite.fr</p>
            </div>
          </div>
        </div>
      </div>
      <p 
        className="py-4 text-center text-xs md:text-sm"
        style={{ color: '#131837', opacity: 0.6 }}
      >
        © 2025 Leïlous Boutique. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;