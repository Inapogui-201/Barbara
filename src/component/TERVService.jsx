import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TERVService = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className="card bg-base-100 image-full w-90 shadow-xl transition-transform transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img
          src="/src/assets/th3.jpg"
          alt="Thérapie par Exposition en Réalité Virtuelle"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">TERV</h2>
        <p className="text-lg">Thérapie par Exposition en Réalité Virtuelle</p>
        
        {/* Texte supplémentaire qui apparaît au survol */}
        {isHovered && (
          <p className="transition-opacity duration-300">
            Une modalité innovante pour traiter les phobies et les troubles anxieux en toute sécurité. Grâce à l'utilisation de la réalité virtuelle, les patients peuvent être progressivement exposés à leurs peurs, tout en étant encadrés par le thérapeute.
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

export default TERVService;