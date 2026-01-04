'use client'

import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  Line
} from '@react-three/drei'
import { Suspense } from 'react'
import Armature from '../components/Armature'
import ArmatureVar from '../components/ArmatureVar'
import { Menu, X, Mail, Phone, Linkedin, Github, Download } from 'lucide-react'
import CompetencesSection from '@/components/CompetencesSection'

export default function Portfolio3D() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'profil', label: 'Profil' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'formation', label: 'Formation' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              M.A. Khammari
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-2 py-1 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-400'
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Section 1: Accueil */}
        <section
          id="accueil"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-12"
        >
          <div className="lg:w-1/2 z-10 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="block">Mohamed Amine</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Khammari
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-6">
              Développeur Full Stack & Étudiant en Informatique
            </p>
            <p className="text-gray-400 mb-8 max-w-xl">
              Actuellement en recherche d'un stage de fin d'études (PFE) pour 
              mettre en pratique mes compétences en développement web et mobile.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Me contacter
              </a>
              <a
                href="/cv-khammari-med.pdf"
                download
                className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800/50 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>

            {/* Contact Info - Style corrigé */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-blue-400" />
                <span>khammarime4f8@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-purple-400" />
                <span>41 128 493</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Linkedin size={20} className="text-blue-400" />
                <a 
                  href="https://linkedin.com/in/mohamed-aminee-khammari/" 
                  target="_blank"
                  className="hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/mohamed-aminee-khammari/
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Github size={20} className="text-gray-300" />
                <a 
                  href="https://github.com/khammarimed" 
                  target="_blank"
                  className="hover:text-purple-400 transition-colors"
                >
                  github.com/khammarimed
                </a>
              </div>
            </div>
          </div>

          {/* 3D Avatar Section */}
          <div className="lg:w-1/2 h-[500px] lg:h-[600px] relative">
            <Canvas shadows gl={{ antialias: true }} className="rounded-2xl overflow-hidden">
              <PerspectiveCamera makeDefault position={[0, 1.2, 5]} fov={45} />
              <ambientLight intensity={0.3} />
              <spotLight
                position={[8, 10, 6]}
                angle={0.2}
                penumbra={0.8}
                intensity={1.4}
                castShadow
              />
              <directionalLight
                position={[0, 5, -5]}
                intensity={0.6}
              />
              <pointLight
                position={[-6, 2, -6]}
                intensity={0.4}
                color="#ffffffff"
              />
              <Environment preset="city" />
              <Suspense fallback={null}>
                <Armature />
              </Suspense>
              <ContactShadows
                position={[0, -2, 0]}
                opacity={0.35}
                scale={8}
                blur={3}
                far={3}
              />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.6}
                maxPolarAngle={Math.PI / 1.4}
                target={[0, 0.8, 0]}
                makeDefault
              />
            </Canvas>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <p className="text-sm text-gray-300 font-medium">Mon avatar 3D</p>
            </div>
          </div>
        </section>

        {/* Section 2: Profil */}
        <section
          id="profil"
          className="min-h-screen px-6 lg:px-12 py-20 bg-gray-900/30"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profil
              </span>
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Étudiant en Licence Informatique – Développement des Systèmes d'Information 
                à l'ISET Sfax, je suis passionné par le développement web et mobile. 
                Actuellement à la recherche d'un stage de fin d'études (PFE) pour 
                approfondir mes compétences et contribuer à des projets innovants.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Localisation</h3>
                  <p className="text-gray-300">Sfax, Tunisie</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Statut</h3>
                  <p className="text-gray-300">Étudiant (2023-2026)</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Objectif</h3>
                  <p className="text-gray-300">Stage PFE (Fin d'études)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Expériences */}
        <section
          id="experiences"
          className="min-h-screen px-6 lg:px-12 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Expériences Professionnelles
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Expérience 1 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Commercial (temps partiel)</h3>
                    <p className="text-gray-400">Magasins Aziza, Sfax</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    nov 2024 – aujourd'hui
                  </span>
                </div>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Présentation des produits, gestion des stocks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Contribution à la qualité du service client</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Compétences développées : </span>
                  <span className="text-blue-400 font-medium">Travail en équipe, communication, gestion du temps</span>
                </div>
              </div>

              {/* Expérience 2 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Stage de perfectionnement</h3>
                    <p className="text-gray-400">CEM (Construction et Emboutissage Métallique), Sfax</p>
                  </div>
                  <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                    jan 2025 - Fév 2025
                  </span>
                </div>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Conception et développement d'une application web</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Gestion des produits, employés et opérations de location</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Technologies : </span>
                  <span className="text-purple-400 font-medium">ASP.NET Core, SQL Server</span>
                </div>
              </div>

              {/* Expérience 3 */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Stage d'initiation</h3>
                    <p className="text-gray-400">Tunisie Télécom, Sfax</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    Jan 2024 – Fév 2024
                  </span>
                </div>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Maintenance et configuration d'ordinateurs portables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Installation du système d'exploitation et des outils</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Support pour le télétravail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Formation */}
        <section
          id="formation"
          className="min-h-screen px-6 lg:px-12 py-20 bg-gray-900/30"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Formation
              </span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                  <h3 className="text-2xl font-semibold">Licence en Technologies de l'Informatique</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium">
                    2023 – 2026
                  </span>
                </div>
                <p className="text-gray-400 text-lg">ISET Sfax – Développement des Systèmes d'Information</p>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                  <h3 className="text-2xl font-semibold">Institut Préparatoire aux Études d'Ingénieur</h3>
                  <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full font-medium">
                    2021 – 2023
                  </span>
                </div>
                <p className="text-gray-400 text-lg">IPEIK – Kairouan</p>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                  <h3 className="text-2xl font-semibold">Baccalauréat, Section Sciences Techniques</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium">
                    2020 – 2021
                  </span>
                </div>
                <p className="text-gray-400 text-lg">Lycée Grenda, Sfax</p>
              </div>
            </div>
          </div>
        </section>

        <CompetencesSection/>


        {/* Section 6: Contact */}
        <section
          id="contact"
          className="min-h-screen px-6 lg:px-12 py-20 bg-gray-900/30"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Prenons contact</h3>
                  <p className="text-gray-300 mb-8">
                    Actuellement à la recherche d'un stage de fin d'études (PFE) pour 
                    mettre en pratique mes compétences et contribuer à vos projets.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Mail className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-lg font-medium">khammarime4f8@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Phone className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Téléphone</p>
                        <p className="text-lg font-medium">41 128 493</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Linkedin className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/mohamed-aminee-khammari/" 
                          target="_blank"
                          className="text-lg font-medium hover:text-blue-400 transition-colors"
                        >
                          Mohamed Amine Khammari
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Github className="text-gray-300" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">GitHub</p>
                        <a 
                          href="https://github.com/khammarimed" 
                          target="_blank"
                          className="text-lg font-medium hover:text-purple-400 transition-colors"
                        >
                          @khammarimed
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Nom complet</label>
                      <input
                        type="text"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm font-medium">Message</label>
                      <textarea
                        rows={5}
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Votre message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Mohamed Amine Khammari. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/mohamed-aminee-khammari/" 
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/khammarimed" 
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:khammarime4f8@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-full"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ width: `${(sections.findIndex(s => s.id === activeSection) + 1) * (100 / sections.length)}%` }}
        />
      </div>
    </div>
  )
}
