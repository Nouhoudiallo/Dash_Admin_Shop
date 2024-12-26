"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Globe,
  Phone,
  Mail,
  MapPin,
  X,
  Menu,
} from "lucide-react";
import Link from "next/link";

interface ScrollToSectionProps {
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  sectionId: string;
}

const scrollToSection = ({ e, sectionId }: ScrollToSectionProps) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const AgencyLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Guinée Local Deals</h1>
          
          {/* Menu pour Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#services" 
              onClick={(e) => scrollToSection({ e, sectionId: 'services' })}
              className="hover:text-yellow-400 transition-colors duration-300">
              Services
            </Link>
            <Link href="#about" 
              onClick={(e) => scrollToSection({ e, sectionId: 'about' })}
              className="hover:text-yellow-400 transition-colors duration-300">
              À Propos
            </Link>
            <Link href="#contact" 
              onClick={(e) => scrollToSection({ e, sectionId: 'contact' })}
              className="hover:text-yellow-400 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu Mobile */}
          <div className={`
            absolute top-full left-0 w-full bg-blue-900 
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            md:hidden
          `}>
            <div className="flex flex-col p-4 space-y-4">
              <Link href="#services" 
                onClick={(e) => {
                  scrollToSection({ e, sectionId: 'services' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition-colors duration-300">
                Services
              </Link>
              <Link href="#about" 
                onClick={(e) => {
                  scrollToSection({ e, sectionId: 'about' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition-colors duration-300">
                À Propos
              </Link>
              <Link href="#contact" 
                onClick={(e) => {
                  scrollToSection({ e, sectionId: 'contact' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">
            Boostez Votre Présence Digitale
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transformez votre visibilité en ligne avec notre expertise en
            marketing digital. Des solutions sur mesure pour votre entreprise en
            Guinée.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center mx-auto">
            <Link href="https://wa.me/224612740815?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services.%20Pouvez-vous%20m'aider%20%3F">
              Commencez Maintenant
            </Link>
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* À Propos */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
            À Propos de DigiBoost Guinée
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              DigiBoost Guinée est née d'une vision claire : transformer la
              présence digitale des entreprises guinéennes pour les propulser
              vers de nouveaux sommets. Depuis notre création, nous accompagnons
              les entreprises locales et régionales dans leur transformation
              numérique avec une approche sur mesure et innovante.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Notre équipe d'experts combine une connaissance approfondie du
              marché guinéen avec une expertise pointue en marketing digital.
              Nous comprenons les défis uniques auxquels font face les
              entreprises en Guinée et nous développons des solutions adaptées
              qui génèrent des résultats tangibles.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Que ce soit pour augmenter votre visibilité sur les réseaux
              sociaux, créer une identité numérique forte à travers un site web
              professionnel, ou développer des stratégies marketing innovantes,
              notre engagement reste le même : votre réussite digitale.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  150+
                </div>
                <p className="text-gray-600">Projets Réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                <p className="text-gray-600">Clients Satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">5+</div>
                <p className="text-gray-600">Années d'Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Nos Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Facebook className="w-12 h-12 text-blue-900 mb-4" />
              <h4 className="text-xl font-bold mb-4">
                Gestion Réseaux Sociaux
              </h4>
              <p className="text-gray-600">
                Stratégies personnalisées pour Facebook, Instagram et LinkedIn.
                Augmentez votre engagement et votre visibilité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-blue-900 mb-4" />
              <h4 className="text-xl font-bold mb-4">Création de Sites Web</h4>
              <p className="text-gray-600">
                Sites web professionnels et responsifs. Une présence en ligne
                qui reflète votre professionnalisme.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Instagram className="w-12 h-12 text-blue-900 mb-4" />
              <h4 className="text-xl font-bold mb-4">Marketing Digital</h4>
              <p className="text-gray-600">
                Campagnes publicitaires ciblées et stratégies de contenu
                adaptées au marché guinéen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Notre Approche
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-900 mb-4">01</div>
                <h4 className="text-xl font-bold mb-4">Analyse Contextuelle</h4>
                <p className="text-gray-600">
                  Nous commençons par une analyse approfondie de votre
                  entreprise et du marché guinéen, en tenant compte des
                  spécificités socio-économiques locales pour développer une
                  stratégie sur mesure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-900 mb-4">02</div>
                <h4 className="text-xl font-bold mb-4">
                  Stratégie Personnalisée
                </h4>
                <p className="text-gray-600">
                  Nous élaborons une stratégie digitale adaptée à vos objectifs,
                  en privilégiant des solutions abordables et efficaces pour le
                  contexte local guinéen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-900 mb-4">03</div>
                <h4 className="text-xl font-bold mb-4">
                  Mise en Œuvre et Suivi
                </h4>
                <p className="text-gray-600">
                  Notre équipe gère l'ensemble du processus, de la création de
                  contenu au suivi des performances, avec une transparence
                  totale sur les résultats obtenus.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-blue-900">
                Notre Engagement
              </h4>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Nous nous distinguons par notre compréhension approfondie du
                  marché guinéen et notre engagement à fournir des solutions
                  adaptées aux réalités locales. Notre approche inclusive
                  valorise chaque acteur économique, des petites aux moyennes
                  entreprises.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Grâce à nos outils d'analyse modernes, nous garantissons des
                  résultats mesurables et une communication transparente tout au
                  long de notre collaboration. Nos services sont conçus pour
                  être accessibles tout en maintenant une qualité optimale.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <div className="text-blue-900 font-bold mr-4 text-xl">
                      ✓
                    </div>
                    <p className="text-gray-700">
                      Solutions adaptées au contexte guinéen
                    </p>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <div className="text-blue-900 font-bold mr-4 text-xl">
                      ✓
                    </div>
                    <p className="text-gray-700">
                      Tarification transparente et abordable
                    </p>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <div className="text-blue-900 font-bold mr-4 text-xl">
                      ✓
                    </div>
                    <p className="text-gray-700">
                      Suivi personnalisé des performances
                    </p>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <div className="text-blue-900 font-bold mr-4 text-xl">
                      ✓
                    </div>
                    <p className="text-gray-700">Expertise du marché local</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Contactez-Nous
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <Link
                  href={
                    "https://wa.me/224612740815?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services.%20Pouvez-vous%20m'aider%20%3F"
                  }
                >
                  <span>+224 612 74 08 15</span>
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <span>contact@digiboost-guinee.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <span>Conakry, Guinée</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre Nom"
                className="w-full p-3 rounded text-gray-800"
              />
              <input
                type="email"
                placeholder="Votre Email"
                className="w-full p-3 rounded text-gray-800"
              />
              <textarea
                placeholder="Votre Message"
                className="w-full p-3 rounded h-32 text-gray-800"
              ></textarea>
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded font-bold hover:bg-yellow-300 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DigiBoost Guinée. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default AgencyLanding;
