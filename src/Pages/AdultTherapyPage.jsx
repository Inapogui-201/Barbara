import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center">
      {/* Section d'accueil avec image de fond */}
      <div 
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('/src/assets/th1.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-white z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Thérapie pour Adultes</h1>
        </div>
      </div>

      {/* Conteneur principal pour le contenu textuel */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        {/* Paragraphes principaux avec justification et centrage */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            La psychothérapie individuelle est une forme classique de thérapie. Pour le praticien, cette pratique est basée sur une écoute attentive, bienveillante et sans jugement. 
            Il s'agit de favoriser le déploiement d'une parole libre et d'un échange authentique qui permettent aux conflits, aux doutes, aux fantasmes, aux affects douloureux de trouver une modalité d'expression.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Mon rôle en tant que psychothérapeute est d'aider à l'exploration de soi, au repérage de ses mouvements inconscients afin de se libérer de ce qui gêne, entrave ou empêche de cheminer dans la vie.
          </p>
        </div>

        {/* Section avec image et texte côte à côte */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
              Lors de la première séance, nous prenons le temps de faire connaissance de manière à préciser votre demande, votre problématique et/ou votre besoin. Ensemble, nous mettons en lumière les événements importants de votre vie afin de saisir le contexte dans lequel s'inscrit votre demande. Enfin, nous définissons la périodicité des rencontres la mieux adaptée à votre problématique et votre disponibilité.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
              Pour les séances suivantes, nous nous inscrivons dans un échange verbal au cours duquel nous revenons d'abord sur votre humeur du moment pour nous diriger progressivement vers votre problématique, vos questionnements et éventuels conflits internes, de sorte à pouvoir proposer, au fil des séances, un mode de résolution adapté à votre situation particulière.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/src/assets/th3.jpg" 
              alt="Thérapie" 
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Paragraphes de conclusion */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Au besoin, les séances peuvent être accompagnées d'exercices simples que vous pourrez parfois avoir à faire entre deux séances.
          </p>
          <p className="font-semibold text-lg mb-12">Une séance dure en moyenne 1 heure.</p>
          <Link 
            to="/appointment" 
            className="inline-block bg-white text-[#3a7ca5] px-8 py-3 rounded-full 
            hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;