'use client'
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {

    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p 
                        className="text-2xl md:text-3xl"
                        style={{ color: '#131837', opacity: 0.8 }}
                    >
                        Ajouter une Adresse de <span className="font-semibold" style={{ color: '#E16939' }}>Livraison</span>
                    </p>
                    <div className="space-y-3 max-w-sm mt-10">
                        <input
                            className="px-2 py-2.5 transition border rounded outline-none w-full"
                            style={{ 
                                borderColor: '#131837',
                                borderWidth: '1px',
                                borderOpacity: 0.3,
                                color: '#131837'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#E16939'}
                            onBlur={(e) => e.target.style.borderColor = '#131837'}
                            type="text"
                            placeholder="Nom complet"
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            value={address.fullName}
                        />
                        <input
                            className="px-2 py-2.5 transition border rounded outline-none w-full"
                            style={{ 
                                borderColor: '#131837',
                                borderWidth: '1px',
                                borderOpacity: 0.3,
                                color: '#131837'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#E16939'}
                            onBlur={(e) => e.target.style.borderColor = '#131837'}
                            type="tel"
                            placeholder="Numéro de téléphone"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className="px-2 py-2.5 transition border rounded outline-none w-full"
                            style={{ 
                                borderColor: '#131837',
                                borderWidth: '1px',
                                borderOpacity: 0.3,
                                color: '#131837'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#E16939'}
                            onBlur={(e) => e.target.style.borderColor = '#131837'}
                            type="text"
                            placeholder="Code postal"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className="px-2 py-2.5 transition border rounded outline-none w-full resize-none"
                            style={{ 
                                borderColor: '#131837',
                                borderWidth: '1px',
                                borderOpacity: 0.3,
                                color: '#131837'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#E16939'}
                            onBlur={(e) => e.target.style.borderColor = '#131837'}
                            rows={4}
                            placeholder="Adresse (Quartier et rue)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        ></textarea>
                        <div className="flex space-x-3">
                            <input
                                className="px-2 py-2.5 transition border rounded outline-none w-full"
                                style={{ 
                                    borderColor: '#131837',
                                    borderWidth: '1px',
                                    borderOpacity: 0.3,
                                    color: '#131837'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#E16939'}
                                onBlur={(e) => e.target.style.borderColor = '#131837'}
                                type="text"
                                placeholder="Ville"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className="px-2 py-2.5 transition border rounded outline-none w-full"
                                style={{ 
                                    borderColor: '#131837',
                                    borderWidth: '1px',
                                    borderOpacity: 0.3,
                                    color: '#131837'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#E16939'}
                                onBlur={(e) => e.target.style.borderColor = '#131837'}
                                type="text"
                                placeholder="Région/Département"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="max-w-sm w-full mt-6 text-white py-3 uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg rounded"
                        style={{ backgroundColor: '#E16939' }}
                    >
                        Sauvegarder l'adresse
                    </button>
                </form>
                <Image
                    className="md:mr-16 mt-16 md:mt-0"
                    src={assets.my_location_image}
                    alt="image de localisation"
                />
            </div>
            <Footer />
        </>
    );
};

export default AddAddress;