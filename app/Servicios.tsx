'use client'

import Image from "next/image"

export default function Servicios() {
  return (
    <div className="bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

function SectionOne() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
     
        <h1 className="text-4xl font-bold mb-8 text-center text-navy-900">
        Nuestros <span className="text-red-600">Servicios</span>
        </h1>

        <div className="md:flex md:gap-8">
          {/* Primera columna */}
          <div className="flex-1 flex flex-col space-y-6">
            <p className="text-gray-800">
              Como empresa con amplia experiencia en Proyectos de Inversión y pre inversión a
              nivel nacional, en el sector público y privado en los rubros de Edificaciones, Saneamiento
              e Industria ofrece lo siguiente:
            </p>
            <div className="flex-grow">
              <Image
                src="/team3.jpg"
                alt="Trabajadores de INGESIBO"
                width={500}
                height={400}
                className="rounded-lg h-full object-cover"
              />
            </div>
            <p className="text-gray-800">
              Somos una empresa de Múltiples Servicios y ejecución de proyectos,
              cuyo compromiso es brindar servicios de excelente calidad
              acorde a las necesidades de nuestros clientes.
            </p>
          </div>
          {/* Segunda columna */}
          <div className="flex-1 bg-black text-white p-8 rounded-lg flex flex-col">
            <h3 className="text-xl font-bold mb-6">¡TE SUMINISTRAMOS TODO LO QUE REQUIERE TU PROYECTO!</h3>
            <p className="mb-4">TRABAJAMOS CON PROVEEDORES DIRECTOS</p>
            <div className="space-y-4 flex-grow">
              <p className="font-bold">INGENIERÍA, CONSTRUCCIÓN, MONTAJE Y MANTENIMIENTO DE:</p>
              <ul className="space-y-2">
                {[
                  "SISTEMA DE AGUA CONTRA INCENDIO",
                  "SISTEMA DE ALARMA Y DETECCIÓN DE INCENDIO",
                  "SISTEMA GENERAL DE BOMBEO",
                  "SISTEMA DE VENTILACIÓN MECÁNICA – MONÓXIDO",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-red-500">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/3d.jpg"
              alt="Plano técnico"
              width={500}
              height={300}
              className="mt-8 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTwo() {
  const services = [
    {
      image: '/contra-incendio.jpg',
      alt: 'Sistema de agua contra incendio',
      title: 'SISTEMA DE AGUA CONTRA INCENDIO',
      description:
        'Instalación, montaje y mantenimiento del cto. máquinas, red de rociadores, montante y sistema de gabinetes de agua contra incendio.',
      bgColor: 'bg-gray-100',
    },
    {
      image: '/sistemacontraincendio.jpg',
      alt: 'Sistema de detección y alarma',
      title: 'SISTEMA DE DETECCIÓN Y ALARMA CONTRA INCENDIO',
      description:
        'Instalación y mantenimiento de equipos de detección y alarmas contra incendio, con sistemas convencionales e inteligentes direccionables.',
      bgColor: 'bg-gray-100',
    },
    {
      image: '/banner-bombeo.jpg',
      alt: 'Sistemas generales de bombeo',
      title: 'SISTEMAS GENERALES DE BOMBEO',
      description:
        'Instalación, montaje y mantenimiento del cto. máquinas, sistema de presión constante, tanque elevado, bombas sumergibles y tableros controladores.',
      bgColor: 'bg-gray-100',
    },
    {
      image: '/ventilacion-banner.jpg',
      alt: 'Sistema de ventilación mecánica',
      title: 'SISTEMA DE VENTILACIÓN MECÁNICA',
      description:
        'Instalación, montaje, mantenimiento y fabricación de ductería de ventilación mecánica, equipos centrífugos, axiales, helicocentrífugos, eólicos, etc.',
      bgColor: 'bg-gray-100',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 cursor-pointer`}
            >
              <div className="aspect-[3/2] relative w-full p-4">
                <div className="w-full h-full relative">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionThree() {
  const serviciosMultiples = [
    {
      title: 'Servicio Principal',
      description: 'Somos una empresa que brinda múltiples servicios, con personal altamente calificado.',
      image: '/mantenimiento.jpg',
      alt: 'Servicios Múltiples',
    },
    {
      title: 'Puertas Cortafuego',
      description:
        'Suministro e instalación de puertas cortafuego 90/180 minutos, con certificación UL en marcos "U" reversible y "Z" de 01 o más hojas.',
      image: '/puerta-cortafuegos-blanca.jpg',
      alt: 'Puerta cortafuego',
    },
    {
      title: 'Enchape de PCF',
      description:
        'Brindamos el servicio de enchape a tus puertas cortafuego, enchape en madera veta lineal o corona, modelo y color según ruteado de cliente. (Se enchapan las caras).',
      image: '/puerta-cortafuegos.jpg',
      alt: 'Enchape PCF',
    },
  ]

  const valores = [
    {
      title: 'PUNTUALIDAD',
      description: 'Entregamos los trabajos en las fechas programadas por el cliente.',
    },
    {
      title: 'CALIDAD',
      description: 'Todos nuestros equipos y materiales están preparados de la mejor calidad para tu proyecto.',
    },
    {
      title: 'TRABAJO EN EQUIPO',
      description: 'Contamos con múltiples profesionales para ejercer cualquier actividad.',
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900">Servicios</h2>
          <h2 className="text-4xl font-bold text-red-600">Múltiples</h2>
          <div className="h-1 bg-red-600 w-32 mx-auto mt-2" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviciosMultiples.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] relative w-full p-4">
                <div className="w-full h-full relative">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-navy-900">Nuestros</h2>
          <h2 className="text-4xl font-bold text-red-600">Valores</h2>
          <div className="h-1 bg-red-600 w-32 mx-auto mt-2" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-red-600 mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{valor.title}</h3>
                <p className="text-gray-700">{valor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}