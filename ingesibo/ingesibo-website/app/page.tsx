'use client'

import NavbarAndBanner from './NavbarAndBanner'
import Servicios from './Servicios'
import SobreMi from './SobreMi'
import PorQueElegirnos from './PorQueElegirnos'
import ClientsSection from './ClientsSection'
import Footer from './Footer'
import Link from 'next/link'
import NuestrosProyectos from './nuestros-proyectos/page'
export default function HomePage() {
  return (
    <>
      <NavbarAndBanner />
      <div id="servicios">
        <Servicios />
      </div>
      <div id="sobre-nosotros">
        <SobreMi />
      </div>
      <PorQueElegirnos />
      <div id="nuestros-proyectos" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-8">Nuestros Proyectos</h2>
          <p className="text-center text-gray-700 mb-8">
            Descubre nuestros proyectos más destacados y cómo estamos contribuyendo al desarrollo del Perú.
          </p>
          <div className="text-center">
            <Link href="/nuestros-proyectos" className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300">
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </div>
      <div id="cliente-section">
        <ClientsSection />
      </div>
      <Footer />
    </>
  )
}