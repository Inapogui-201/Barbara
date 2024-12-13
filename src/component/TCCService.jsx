import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TCCService = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className="card bg-base-100 image-full w-90 h-auto max-h-[800px] overflow-hidden shadow-xl transition-transform transform hover:scale-105"
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img
          src="/src/assets/thh1.jpg"
          alt="Thérapie Comportementale et Cognitive"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">TCC</h2>
        <p className="text-lg font-semibold">Thérapie Comportementale et Cognitive</p>
        
        {/* Texte supplémentaire qui apparaît au survol */}
        {isHovered && (
          <p className="transition-opacity duration-300">
            Une approche efficace pour traiter les troubles psychologiques en modifiant les pensées et les comportements. Cette thérapie vise à aider les patients à développer des stratégies pour mieux gérer leurs émotions et leurs comportements.
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

export default TCCService;