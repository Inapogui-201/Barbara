import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <footer className="bg-[#3a7ca5] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informations de Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">📍 Saint-Maur-des-Fossés, France</p>
            <p className="mb-2">📞 +33 1 23 45 67 89</p>
            <p className="mb-2">✉️ email@example.com</p>
          </div>

          {/* Liens Utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Accueil</a></li>
              <li><a href="/ateliers" className="hover:underline">Ateliers</a></li>
              <li><a href="/consultations" className="hover:underline">Consultations</a></li>
              <li><a href="/about" className="hover:underline">À Propos</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-white pt-4">
          <p>&copy; {new Date().getFullYear()} Barbara Para. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;