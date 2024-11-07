import Image from 'next/image'

export default function PorQueElegirnos() {
  const certificationLogos = [
    { name: 'ASTM', src: '/logos/astm.png' },
    { name: 'SSPC', src: '/logos/sspc.png' },
    { name: 'AWS', src: '/logos/aws.png' },
    { name: 'NFPA', src: '/logos/nfpa.png' },
    { name: 'ASME', src: '/logos/asme.png' },
    { name: 'ELSA', src: '/logos/elsa.png' },
    { name: 'ELSA2', src: '/logos/elsa1.png' }

  ]

  const providerLogos = [
    { name: 'WDM', src: '/logos/wdm.png' },
    { name: 'LALLAE', src: '/logos/lallae.png' },
    { name: 'Mircom', src: '/logos/mircom.png' },
    { name: 'Fittom', src: '/logos/fittom.png' },
    { name: 'Digicorp', src: '/logos/digicorp.png' },
    { name: 'ARES', src: '/logos/ares.png' },
    { name: 'Systemair', src: '/logos/systemair.png' },
    { name: 'Systemair2', src: '/logos/systemair.png' },
    { name: 'New1', src: '/logos/systemair.png' }
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-navy-900">¿Por qué </span>
            <span className="text-red-600">elegirnos?</span>
          </h2>
          <div className="h-0.5 w-24 bg-red-600 mt-2" />
        </div>

        {/* Texto explicativo */}
        <p className="text-gray-700 mb-12 max-w-3xl">
          Una de las razones para elegirnos es porque nuestro staff de técnicos e ingenieros 
          están calificados y tienen el conocimiento de las normas a seguir, sobre el suministro, 
          instalación y mantenimiento de los diferentes Sistemas que tenemos.
        </p>

        {/* Logos de certificaciones */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 place-items-center mb-16">
          {certificationLogos.map((logo) => (
            <div key={logo.name} className="w-32 h-20 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Texto de proveedores */}
        <p className="text-gray-700 mb-8">
          Contamos con proveedores directos para las instalaciones y los mantenimientos 
          De los sistemas que brindamos:
        </p>

        {/* Logos de proveedores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {providerLogos.map((logo) => (
            <div key={logo.name} className="w-32 h-20 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}