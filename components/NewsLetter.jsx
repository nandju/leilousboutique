import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 
        className="md:text-4xl text-2xl font-medium"
        style={{ color: '#131837' }}
      >
        Abonnez-vous et profitez de -20% sur votre premier achat
      </h1>
      <p 
        className="md:text-base pb-8"
        style={{ color: '#131837', opacity: 0.6 }}
      >
        Recevez en avant-première nos nouvelles collections d’Abayas, nos parfums d’exception et nos senteurs orientales exclusives.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border-2 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 transition-all duration-300 focus:shadow-md"
          style={{ 
            borderColor: '#131837',
            color: '#131837'
          }}
          type="email"
          placeholder="Entrez votre adresse email"
        />
        <button 
          className="md:px-12 px-8 h-full text-white rounded-md rounded-l-none font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: '#E16939' }}
        >
          S'abonner
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;