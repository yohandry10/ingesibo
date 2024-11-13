// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import NavbarAndBanner from './NavbarAndBanner'
import Servicios from './Servicios'
import SobreMi from './SobreMi'
import PorQueElegirnos from './PorQueElegirnos'
import ClientsSection from './ClientsSection'
import Footer from './Footer'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'
import Preloader from './preLoader'
import ParallaxSection from './ParallaxSection' // Importa el componente Parallax

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NavbarAndBanner />
          <div id="servicios">
            <Servicios />
          </div>
          <div id="sobre-nosotros">
            <SobreMi />
          </div>
          <PorQueElegirnos />
          <ParallaxSection backgroundImage="/path/to/your-image.jpg">
            <h2 className="text-4xl font-bold text-center text-navy-900 mb-8">Nuestros Proyectos</h2>
            <p className="text-center text-gray-700 mb-8">
              Descubre nuestros proyectos más destacados y cómo estamos contribuyendo al desarrollo del Perú.
            </p>
            <div className="text-center">
              <Link href="/nuestros-proyectos" className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300">
                Ver Todos los Proyectos
              </Link>
            </div>
          </ParallaxSection>
          <div id="cliente-section">
            <ClientsSection />
          </div>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}
9