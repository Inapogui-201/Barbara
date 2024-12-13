import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ajoutez l'importation de BrowserRouter ici
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
import AdultTherapyPage from './Pages/AdultTherapyPage';


export default function App() {
  return (
    <BrowserRouter>
     <div className="bg-red-500">
      <Routes> {/* Utilisez Router pour envelopper vos routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/services/adultes" element={< AdultTherapyPage />} />
        </Routes>
    </div>
    </BrowserRouter>
   
  );
}
