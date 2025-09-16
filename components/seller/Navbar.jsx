
import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import { LogOut } from 'lucide-react'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-4 justify-between border-b shadow-sm bg-white'
         style={{ borderColor: '#131837', borderOpacity: 0.1 }}>
      
      {/* Section Logo */}
      <div className="flex items-center gap-3">
        <Image 
          onClick={() => router.push('/')} 
          className='w-28 lg:w-32 cursor-pointer hover:opacity-80 transition-opacity' 
          src={assets.logo_truth_sans_fond} 
          alt="Logo" 
        />
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E16939' }}></div>
          <span className="text-sm font-medium" style={{ color: '#131837' }}>
            Espace Vendeur
          </span>
        </div>
      </div>

      {/* Bouton Déconnexion */}
      <button 
        className='flex items-center gap-2 text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg'
        style={{ backgroundColor: '#E16939' }}
      >
        <LogOut className="w-4 h-4" />
        <span>Déconnexion</span>
      </button>
    </div>
  )
}

export default Navbar