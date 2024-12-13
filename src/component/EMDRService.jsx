import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EMDRService = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card bg-base-100 image-full w-90  shadow-xl transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img
          src="/src/assets/th2.jpg"
          alt="EMDR Therapy"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">EMDR</h2>
        <p className="text-lg">Désensibilisation et retraitement par les mouvements oculaires</p>
        
        {/* Texte supplémentaire qui apparaît au survol */}
        {isHovered && (
          <p className="transition-opacity duration-300">
            Une thérapie innovante pour le traitement du stress post-traumatique. L'EMDR utilise les mouvements oculaires pour aider le patient à traiter les souvenirs traumatiques et à développer de nouvelles stratégies d'adaptation.
          </p>
        )}

        <div className="card-actions justify-end">
          <a 
            href="#" 
            className="
              text-sm 
              px-3 
              py-1 
              bg-white/20 
              hover:bg-white/30 
              rounded 
              transition-colors
              inline-block
            "
          >
            Voir plus
          </a>
          
          {/* Icône qui apparaît au survol */}
          {isHovered && (
            <span className="ml-2 text-gray-600">
              <ChevronDown />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMDRService;