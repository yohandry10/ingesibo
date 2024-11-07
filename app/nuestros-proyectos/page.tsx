"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NuestrosProyectos() {
  const router = useRouter();

  const proyectos = [
    {
      id: 1,
      nombre: "Proyecto Stay",
      descripcion: "Descripción del Proyecto Stay",
      fotos: [
        "/Proyecto-Stay/bomba1.jpeg",
        "/Proyecto-Stay/bomba2.jpeg",
        "/Proyecto-Stay/bomba3.jpeg",
        "/Proyecto-Stay/bomba4.jpeg",
        "/Proyecto-Stay/bomba5.jpeg",
        "/Proyecto-Stay/bomba6.jpeg",
        "/Proyecto-Stay/bomba7.jpeg",
        "/Proyecto-Stay/8.jpeg",
        "/Proyecto-Stay/9.jpeg",
      ],
    },
    {
      id: 4,
      nombre: "Proyecto en Ejecución Porto Fino",
      descripcion: "Descripción del Proyecto en Ejecución Porto Fino",
      fotos: [
        "/Porto-Fino/porto1.jpeg",
        "/Porto-Fino/porto2.jpeg",
        "/Porto-Fino/porto3.jpeg",
        "/Porto-Fino/porto4.jpeg",
        "/Porto-Fino/porto5.jpeg",
        "/Porto-Fino/porto6.jpeg",
        "/Porto-Fino/porto7.jpeg",
        "/Porto-Fino/porto8.jpeg",
        "/Porto-Fino/porto9.jpeg",
        "/Porto-Fino/porto10.jpeg",
      ],
    },
    {
      id: 2,
      nombre: "Proyecto Residencia Las Hermanitas",
      descripcion: "Descripción del Proyecto Residencia Las Hermanitas",
      fotos: [
        "/Hermanitas/herrma1.jpeg",
        "/Hermanitas/herma2.jpeg",
        "/Hermanitas/herma3.jpeg",
      ],
    },
    {
      id: 3,
      nombre: "Proyecto Verdi",
      descripcion: "Descripción del Proyecto Verdi",
      fotos: [
        "/Verdi/verdi1.jpeg",
        "/Verdi/verdi2.jpeg",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12">
        <span className="text-red-600">Nuestros </span>
        <span className="text-blue-600">Proyectos</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-bold mb-4 text-center">
              <span className="text-blue-600">{proyecto.nombre.split(" ")[0]}</span>{" "}
              <span className="text-red-600">{proyecto.nombre.split(" ").slice(1).join(" ")}</span>
            </h3>
            <p className="text-gray-600 text-center mb-6 italic">{proyecto.descripcion}</p>
            
            <div className="grid grid-cols-3 gap-4">
              {proyecto.fotos.map((foto, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={foto}
                    alt={`${proyecto.nombre} - Foto ${index + 1}`}
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

      {/* Botón de Volver al Inicio */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
