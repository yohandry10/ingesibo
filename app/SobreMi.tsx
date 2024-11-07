'use client'

import { useState, useEffect, useRef } from 'react'
import Image from "next/image"

export default function SobreMi() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-20 overflow-hidden">
      {/* Círculo decorativo */}
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-navy-900 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10" />

      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900">SOBRE</h2>
          <h2 className="text-4xl font-bold text-red-600 mb-2">NOSOTROS</h2>
          <div
            className={`h-1 bg-red-600 w-32 mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <Image
              src="/equipo.jpg"
              alt="Equipo"
              width={700}
              height={360}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Como empresa con amplia experiencia en Proyectos de Inversión y pre inversión a nivel nacional, en el sector público y privado en los rubros de Edificaciones, Saneamiento e Industria, nos comprometemos a brindar servicios de excelente calidad acorde a las necesidades de nuestros clientes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo está formado por profesionales altamente calificados, dedicados a ofrecer soluciones innovadoras y eficientes en cada proyecto que emprendemos.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          {/* Elementos numerados */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Item 1 */}
            <div
              className={`flex flex-col items-start gap-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold text-navy-900">NUESTRO OBJETIVO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Contamos con personal 100% calificado con el fin de brindar la mejor solución a nuestros distinguidos clientes ya que nuestro principal objetivo es garantizar un servicio de alta calidad.
              </p>
              <p className="text-gray-600">
                Para eso te asesoramos para una optimización total.
              </p>
            </div>

            {/* Item 2 */}
            <div
              className={`flex flex-col items-start gap-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold text-navy-900">MISIÓN</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nuestro compromiso es apoyar a conseguir y mejorar la calidad de vida de los ciudadanos a lo largo y ancho de nuestro Perú, brindando servicio de calidad.
              </p>
            </div>

            {/* Item 3 */}
            <div
              className={`flex flex-col items-start gap-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold text-navy-900">VISIÓN</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Construir optimizando y aplicando las mejores técnicas sumadas al talento y experiencia de nuestro staff técnico profesional, debidamente actualizado y capacitado.
              </p>
            </div>
          </div>

          {/* Imagen final */}
          <div className="relative mt-16 rounded-3xl overflow-hidden">
            <Image
              src="/sistemas-contra-incendios.jpg"
              alt="Sistemas contra incendios"
              width={1200}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-xl italic">
                Trabajamos permanentemente por tu seguridad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}