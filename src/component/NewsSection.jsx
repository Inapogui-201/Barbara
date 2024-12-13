import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsArticles = [
    {
      title: "Atelier de Pleine Conscience",
      date: "18 Mai 2023",
      excerpt: "Rejoignez-nous pour un atelier de découverte des techniques de pleine conscience. Apprenez à mieux gérer votre stress et à cultiver la sérénité au quotidien.",
      link: "/actualites/pleine-conscience"
    },
    {
      title: "Conseils pour Surmonter l'Anxiété",
      date: "08 Avril 2023",
      excerpt: "Découvrez nos meilleurs conseils pour identifier et faire face à l'anxiété de manière saine et durable. Un premier pas vers le mieux-être.",
      link: "/actualites/conseils-anxiete"
    },
    {
      title: "Nouveau Service : Thérapie de Couple",
      date: "22 Mars 2023",
      excerpt: "Barbara Para étend son offre avec une nouvelle spécialité : la thérapie de couple. Redonnez vie à votre relation grâce à un accompagnement personnalisé.",
      link: "/actualites/therapie-de-couple"
    }
  ];

  return (
    <section className="bg-[#f4f7f6] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#3a7ca5] mb-8">
          Nos Dernières Actualités
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-[#3a7ca5] font-bold text-lg mb-4">
                  {article.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <CalendarDays size={16} className="mr-2" />
                  <span>{article.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Link 
                  to={article.link} 
                  className="text-[#3a7ca5] font-medium flex items-center mt-auto"
                >
                  Lire la suite
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;