import React, { useState } from 'react';
import { User, Mail, Calendar, MessageCircle, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentType: 'Cabinet',
    message: ''
  });

  const [formStage, setFormStage] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormStage(2);
    
    // Simuler un envoi et réinitialisation après 3 secondes
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        appointmentType: 'Cabinet',
        message: ''
      });
      setFormStage(0);
    }, 3000);
  };

  const appointmentTypes = [
    { value: 'Cabinet', label: 'Rendez-vous au Cabinet' },
    { value: 'Vidéo', label: 'Consultation Vidéo' }
  ];

  const renderFormContent = () => {
    switch(formStage) {
      case 0:
        return (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-light text-gray-800">
                Réservez <span className="font-bold text-emerald-600">Votre Rendez-vous</span>
              </h2>
              <p className="text-gray-500 mt-2">Nous sommes à votre écoute</p>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 pl-12 border-2 border-transparent 
                             focus:border-emerald-500 rounded-xl 
                             bg-gray-100 focus:bg-white 
                             transition duration-300 ease-in-out"
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 
                                 text-gray-400 group-focus-within:text-emerald-500 
                                 transition duration-300" />
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Votre email"
                  className="w-full px-4 py-3 pl-12 border-2 border-transparent 
                             focus:border-emerald-500 rounded-xl 
                             bg-gray-100 focus:bg-white 
                             transition duration-300 ease-in-out"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 
                                 text-gray-400 group-focus-within:text-emerald-500 
                                 transition duration-300" />
              </div>

              <div className="relative group">
                <select 
                  id="appointmentType" 
                  value={formData.appointmentType} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 pl-12 border-2 border-transparent 
                             focus:border-emerald-500 rounded-xl 
                             bg-gray-100 focus:bg-white 
                             appearance-none 
                             transition duration-300 ease-in-out"
                >
                  {appointmentTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 
                                    text-gray-400 group-focus-within:text-emerald-500 
                                    transition duration-300" />
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  required 
                  placeholder="Détails de votre rendez-vous"
                  className="w-full px-4 py-3 pl-12 border-2 border-transparent 
                             focus:border-emerald-500 rounded-xl 
                             bg-gray-100 focus:bg-white 
                             resize-none 
                             transition duration-300 ease-in-out"
                ></textarea>
                <MessageCircle className="absolute left-4 top-4 
                                          text-gray-400 group-focus-within:text-emerald-500 
                                          transition duration-300" />
              </div>

              <button 
                onClick={() => setFormStage(1)} 
                className="w-full bg-emerald-500 text-white py-3 rounded-xl 
                           hover:bg-emerald-600 transition duration-300 
                           flex items-center justify-center space-x-2"
              >
                <span>Continuer</span>
                <Send size={20} />
              </button>
            </div>
          </>
        );
      
      case 1:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-light text-gray-800">
              Confirmer <span className="font-bold text-emerald-600">Votre Rendez-vous</span>
            </h2>
            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Voulez-vous confirmer votre rendez-vous avec les informations suivantes ?
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li>📋 Nom : <span className="font-semibold">{formData.name}</span></li>
                <li>✉️ Email : <span className="font-semibold">{formData.email}</span></li>
                <li>📅 Type : <span className="font-semibold">{formData.appointmentType}</span></li>
              </ul>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setFormStage(0)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
                >
                  Modifier
                </button>
                <button 
                  onClick={handleSubmit}
                  className="flex-1 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="animate-bounce bg-emerald-100 p-4 rounded-full">
                <Send size={40} className="text-emerald-600" />
              </div>
            </div>
            <h2 className="text-3xl font-light text-gray-800">
              <span className="font-bold text-emerald-600">Merci !</span> Votre demande a été envoyée
            </h2>
            <p className="text-gray-500">
              Nous traiterons votre demande dans les plus brefs délais.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-16 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        {renderFormContent()}
      </div>
    </section>
  );
};

export default ContactForm;