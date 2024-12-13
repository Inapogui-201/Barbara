import React from 'react';
 import AdditionalInfo from '../component/AdditionalInfo';
import AppointmentOptions from '../component/AppointmentOptions';


const AppointmentPage = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
          Prise de Rendez-vous
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Choisissez votre méthode de consultation et remplissez le formulaire ci-dessous.
        </p>
        
     <AppointmentOptions />
        <AdditionalInfo />  
      </div>
    </div>
  );
};

export default AppointmentPage;