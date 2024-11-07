"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { name: 'Nuestros Proyectos', href: '/nuestros-proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function NavbarAndBanner() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`flex-shrink-0 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
              <Link href="#inicio">
                <span className="cursor-pointer">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <Image
                      src="/logo.jpeg"
                      alt="INGESIBO Logo"
                      width={110}
                      height={110}
                      className="rounded-full"
                    />
                  </div>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4 bg-white px-4 py-2 rounded-md">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`nav-link relative group cursor-pointer overflow-hidden ${item.name === 'Inicio' || item.name === 'Sobre Nosotros'
                        ? 'font-serif'
                        : ''}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`block nav-link-mobile relative group cursor-pointer overflow-hidden ${item.name === 'Inicio' || item.name === 'Sobre Nosotros'
                      ? 'font-serif'
                      : ''}`}
                  >
                    <span className="relative z-10 px-3 py-2">{item.name}</span>
                    <span className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div id="inicio" className="relative">
        <div className="absolute inset-0">
          <Image
            src="/banner.1.jpg"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Tu proyecto,</span>
            <span className="block text-red-600">nuestro proyecto</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Como empresa con amplia experiencia en Proyectos de Inversión y pre inversión a nivel nacional, en el sector público y privado en los rubros de Edificaciones, Saneamiento e Industria.
          </p>
          <div className="mt-10">
            <Link href="/nuestros-proyectos">
              <span className="inline-block bg-red-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-red-700 transition duration-300 cursor-pointer">
                Nuestros Proyectos
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
