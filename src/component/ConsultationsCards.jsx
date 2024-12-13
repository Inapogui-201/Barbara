import React from 'react';

const ConsultationsCards = () => {
  const consultations = [
    {
      title: "Consultations pour Adultes",
      description: "Le suivi de l'adulte consiste à analyser la situation ou le trouble qui fait souffrir le patient. C'est une part de psycho-éducation pour que le patient comprenne pourquoi il souffre et ce que la thérapie peut lui offrir. C'est l'accompagner dans la modification de ses comportements et de ses modes de pensée.",
      bgColor: "bg-[#e0f7fa]", // Couleur de fond
    },
    {
      title: "Consultations pour Enfants",
      description: "Je reçois les parents pour de la guidance parentale en thérapie individuelle ou groupée et je reçois les parents avec leur enfant pour une prise en charge en psychothérapie ICV pour traiter des troubles de l'attachement ou psychotrauma.",
      bgColor: "bg-[#ffe0b2]", // Couleur de fond
    },
    {
      title: "Consultations pour Adolescents",
      description: "La psychothérapie de l’adolescent est le plus souvent une thérapie d’accompagnement du processus adolescent, période au cours de laquelle il lui faut se séparer de ses parents, s’individualiser et devenir adulte.",
      bgColor: "bg-[#d1c4e9]", // Couleur de fond
    },
    {
      title: "Consultations pour Couples",
      description: "La thérapie de couple est un espace neutre où les deux partenaires peuvent s’exprimer en présence d’un tiers, ceci afin de relancer le dialogue lorsqu’il est compliqué, rompu ou inexistant.",
      bgColor: "bg-[#c8e6c9]", // Couleur de fond
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
          Consultations Disponibles
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {consultations.map((consultation, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${consultation.bgColor} flex-1 min-w-[250px]`}
            >
              <h3 className="text-xl font-semibold text-[#3a7ca5] mb-4">{consultation.title}</h3>
              <p className="text-gray-600">{consultation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationsCards;