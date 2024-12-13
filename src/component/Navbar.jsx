import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesDropdown = [
    {
      category: "Accompagnement Individuel",
      items: [
        { name: "Adultes", path: "/services/adultes" },
        { name: "Adolescents", path: "/services/adolescents" },
        { name: "Gestion du Stress", path: "/services/stress" },
        { name: "Estime de Soi", path: "/services/estime-de-soi" }
      ]
    },
    {
      category: "Accompagnement Spécialisé",
      items: [
        { name: "Thérapie de Couple", path: "/services/couple" },
        { name: "Burn-out", path: "/services/burn-out" },
        { name: "Dépression", path: "/services/depression" },
        { name: "Anxiété", path: "/services/anxiete" }
      ]
    }
  ];

  const approachesDropdown = [
    {
      category: "Approches Thérapeutiques",
      items: [
        { name: "Thérapie Cognitivo-Comportementale", path: "/approches/tcc" },
        { name: "Thérapie Systémique", path: "/approches/systemique" },
        { name: "Thérapie Humaniste", path: "/approches/humaniste" },
        { name: "Analyse Transactionnelle", path: "/approches/at" }
      ]
    },
    {
      category: "Techniques Complémentaires",
      items: [
        { name: "Méditation", path: "/approches/meditation" },
        { name: "Pleine Conscience", path: "/approches/pleine-conscience" },
        { name: "Relaxation", path: "/approches/relaxation" },
        { name: "Art-Thérapie", path: "/approches/art-therapie" }
      ]
    }
  ];

  const NavLinks = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Services', 
      dropdown: servicesDropdown 
    },
    { 
      name: 'Approches', 
      dropdown: approachesDropdown 
    },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <img src="/src/assets/logoo-removebg-preview.png" alt="Barbara Para Logo" className="w-20"/>
          <div className="flex flex-col mr-12">
            <span className="text-[#3a7ca5] font-bold text-2xl leading-tight tracking-wider">Barbara Para</span>
            <span className="text-[#3a7ca5]/80 text-sm font-medium tracking-wide">Psychologue Clinicienne</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseEnter={() => handleMouseEnter(link.name)}>
              <button className="text-[#3a7ca5] hover:text-[#2c6088] transition-colors font-medium text-sm uppercase tracking-wider flex items-center">
                {link.name}
                {link.dropdown && <ChevronDown size={16} className="ml-1"/>}
              </button>

              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-xl shadow-2xl transform origin-top-left transition-all duration-300 ease-out animate-dropdown-enter"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={handleMouseLeave}>
                  <div className="grid grid-cols-2 p-6 gap-6">
                    {link.dropdown.map((section, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-[#3a7ca5] font-bold mb-2 uppercase text-sm">{section.category}</h3>
                        {section.items.map((item) => (
                          <Link key={item.path} to={item.path} className="block text-gray-700 hover:text-[#3a7ca5] hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-200">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#3a7ca5] focus:outline-none">
            <Menu size={24}/>
          </button>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-10">
              <ul className="flex flex-col space-y-2 p-4">
                {NavLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path || '#'} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#3a7ca5] px-3 py-2 rounded-md transition-colors duration-200">
                      {link.name}
                    </Link>
                    {/* Dropdown for Services and Approaches */}
                    {link.dropdown && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {(link.dropdown === servicesDropdown ? servicesDropdown : approachesDropdown).map((section) => (
                          section.items.map((item) => (
                            <li key={item.path}>
                              <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#3a7ca5] px-2 py-1 rounded-md transition-colors duration-200">
                                {item.name}
                              </Link>
                            </li>
                          ))
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-[#3a7ca5] border border-[#3a7ca5] px-4 py-2 rounded-full hover:bg-[#3a7ca5]/10 transition-colors text-sm font-medium tracking-wider">Mon Espace</button>
          <button className="bg-[#3a7ca5] text-white px-6 py-2 rounded-full hover:bg-[#2c6088] transition-colors font-semibold text-sm shadow-md hover:shadow-lg">Réserver</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;