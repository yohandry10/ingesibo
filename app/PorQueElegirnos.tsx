import Image from 'next/image';

export default function PorQueElegirnos() {
  const certificationLogos = [
    { name: 'ASTM', src: '/logos/aisc.png' },
    { name: 'SSPC', src: '/logos/sspc.png' },
    { name: 'AWS', src: '/logos/aws.png' },
    { name: 'NFPA', src: '/logos/nfpa.avif' },
    { name: 'ASME', src: '/logos/asme.jpeg' },
    { name: 'ISO', src: '/logos/iso.jpg' },
    { name: 'API', src: '/logos/api.png' }
  ];

  const providerLogos = [
    { name: 'WDM', src: '/logos/wdm.png' },
    { name: 'LALLAE', src: '/logos/lallave.png' },
    { name: 'Mircom', src: '/logos/mircom.webp' },
    { name: 'Fittom', src: '/logos/fitflow.png' }, 
    { name: 'Digicorp', src: '/logos/digicorp.jpg' },
    { name: 'ARES', src: '/logos/ares.png' },
    { name: 'Systemair', src: '/logos/system.png' },
    { name: 'Pentax', src: '/logos/pentas.png' },
    { name: 'Bombas', src: '/logos/bombas3.png' } 
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-navy-900">¿Por qué </span>
            <span className="text-red-600">elegirnos?</span>
          </h2>
          <div className="h-0.5 w-24 bg-red-600 mt-2 mx-auto" />
        </div>

        {/* Texto explicativo */}
        <p className="text-gray-700 mb-12 max-w-3xl text-center mx-auto">
          Una de las razones para elegirnos es porque nuestro staff de técnicos e ingenieros 
          están calificados y tienen el conocimiento de las normas a seguir, sobre el suministro, 
          instalación y mantenimiento de los diferentes sistemas que tenemos.
        </p>

        {/* Logos de certificaciones */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 place-items-center mb-16">
          {certificationLogos.map((logo) => (
            <div key={logo.name} className="w-32 h-32 p-4 bg-white rounded-full shadow-lg relative hover:scale-105 transition-transform duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Texto de proveedores */}
        <p className="text-gray-700 mb-8 text-center">
          Contamos con proveedores directos para las instalaciones y los mantenimientos 
          de los sistemas que brindamos:
        </p>

        {/* Logos de proveedores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {providerLogos.map((logo) => (
            <div key={logo.name} className="w-32 h-32 p-4 bg-white rounded-full shadow-lg relative hover:scale-105 transition-transform duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
