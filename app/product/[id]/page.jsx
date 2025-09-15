"use client"
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Product = () => {

    const { id } = useParams();

    const { products, router, addToCart } = useAppContext()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (<>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div 
                        className="rounded-lg overflow-hidden mb-4"
                        style={{ backgroundColor: '#F6F7EC' }}
                    >
                        <Image
                            src={mainImage || productData.image[0]}
                            alt="image du produit"
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {productData.image.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#F6F7EC' }}
                            >
                                <Image
                                    src={image}
                                    alt={`image produit ${index + 1}`}
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 
                        className="text-3xl font-medium mb-4"
                        style={{ color: '#131837' }}
                    >
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Image className="h-4 w-4" src={assets.star_icon} alt="icône étoile" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="icône étoile" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="icône étoile" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="icône étoile" />
                            <Image
                                className="h-4 w-4"
                                src={assets.star_dull_icon}
                                alt="icône étoile vide"
                            />
                        </div>
                        <p style={{ color: '#131837', opacity: 0.7 }}>(4.5)</p>
                    </div>
                    <p 
                        className="mt-3"
                        style={{ color: '#131837', opacity: 0.8 }}
                    >
                        {productData.description}
                    </p>
                    <p 
                        className="text-3xl font-medium mt-6"
                        style={{ color: '#131837' }}
                    >
                        {productData.offerPrice}€
                        <span 
                            className="text-base font-normal line-through ml-2"
                            style={{ color: '#131837', opacity: 0.6 }}
                        >
                            {productData.price}€
                        </span>
                    </p>
                    <hr 
                        className="my-6"
                        style={{ backgroundColor: '#131837', opacity: 0.2 }}
                    />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                <tr>
                                    <td 
                                        className="font-medium py-1"
                                        style={{ color: '#131837' }}
                                    >
                                        Marque
                                    </td>
                                    <td 
                                        style={{ color: '#131837', opacity: 0.6 }}
                                    >
                                        Générique
                                    </td>
                                </tr>
                                <tr>
                                    <td 
                                        className="font-medium py-1"
                                        style={{ color: '#131837' }}
                                    >
                                        Couleur
                                    </td>
                                    <td 
                                        style={{ color: '#131837', opacity: 0.6 }}
                                    >
                                        Multicolore
                                    </td>
                                </tr>
                                <tr>
                                    <td 
                                        className="font-medium py-1"
                                        style={{ color: '#131837' }}
                                    >
                                        Catégorie
                                    </td>
                                    <td 
                                        style={{ color: '#131837', opacity: 0.6 }}
                                    >
                                        {productData.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center mt-10 gap-4">
                        <button 
                            onClick={() => addToCart(productData._id)} 
                            className="w-full py-3.5 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md border-2 rounded"
                            style={{
                                borderColor: '#131837',
                                color: '#131837',
                                backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#131837';
                                e.target.style.color = '#F6F7EC';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#131837';
                            }}
                        >
                            Ajouter au panier
                        </button>
                        <button 
                            onClick={() => { addToCart(productData._id); router.push('/cart') }} 
                            className="w-full py-3.5 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-md rounded"
                            style={{ backgroundColor: '#E16939' }}
                        >
                            Acheter maintenant
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4 mt-16">
                    <p 
                        className="text-3xl font-medium"
                        style={{ color: '#131837' }}
                    >
                        Produits <span style={{ color: '#E16939' }}>Vedettes</span>
                    </p>
                    <div 
                        className="w-28 h-0.5 mt-2"
                        style={{ backgroundColor: '#E16939' }}
                    ></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                    {products.slice(0, 5).map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
                <button 
                    className="px-8 py-2 mb-16 border-2 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                    style={{
                        borderColor: '#131837',
                        color: '#131837',
                        backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#131837';
                        e.target.style.color = '#F6F7EC';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#131837';
                    }}
                >
                    Voir plus
                </button>
            </div>
        </div>
        <Footer />
    </>
    ) : <Loading />
};

export default Product;