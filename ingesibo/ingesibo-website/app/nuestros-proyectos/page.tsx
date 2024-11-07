"use client";

import Image from "next/image";

export default function NuestrosProyectos() {
  const proyectos = [
    {
      id: 1,
      nombre: "Proyecto Stay",
      descripcion: "Descripción del Proyecto Stay",
      fotos: [
        "/proyecto-stay/foto1.jpg",
        "/proyecto-stay/foto2.jpg",
        "/proyecto-stay/foto3.jpg",
        "/proyecto-stay/foto4.jpg",
        "/proyecto-stay/foto5.jpg",
        "/proyecto-stay/foto6.jpg",
        "/proyecto-stay/foto7.jpg",
        "/proyecto-stay/foto8.jpg",
        "/proyecto-stay/foto9.jpg",
      ],
    },
    {
      id: 4,
      nombre: "Proyecto en Ejecución Porto Fino",
      descripcion: "Descripción del Proyecto en Ejecución Porto Fino",
      fotos: [
        "/porto-fino/foto1.jpg",
        "/porto-fino/foto2.jpg",
        "/porto-fino/foto3.jpg",
        "/porto-fino/foto4.jpg",
        "/porto-fino/foto5.jpg",
        "/porto-fino/foto6.jpg",
        "/porto-fino/foto7.jpg",
        "/porto-fino/foto8.jpg",
        "/porto-fino/foto9.jpg",
        "/porto-fino/foto10.jpg",
      ],
    },
    {
      id: 2,
      nombre: "Proyecto Residencia Las Hermanitas",
      descripcion: "Descripción del Proyecto Residencia Las Hermanitas",
      fotos: [
        "/residencia-hermanitas/foto1.jpg",
        "/residencia-hermanitas/foto2.jpg",
        "/residencia-hermanitas/foto3.jpg",
      ],
    },
    {
      id: 3,
      nombre: "Proyecto Verdi",
      descripcion: "Descripción del Proyecto Verdi",
      fotos: [
        "/proyecto-verdi/foto1.jpg",
        "/proyecto-verdi/foto2.jpg",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestros Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">{proyecto.nombre}</h3>
            <p className="text-gray-700 text-center mb-4">{proyecto.descripcion}</p>
            
            {/* Galería de Imágenes */} 
            <div className="grid grid-cols-3 gap-4">
              {proyecto.fotos.map((foto, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={foto}
                    alt={`${proyecto.nombre} - Foto ${index + 1}`}
                    layout="responsive"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
