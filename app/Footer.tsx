'use client'

import Link from 'next/link'

export default function Footer() {
  const socialMedia = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 
            1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 
            1.893-4.788 4.659-4.788 1.325 0 2.464.099 
            2.794.143v3.24l-1.918.001c-1.504 
            0-1.796.715-1.796 1.763v2.312h3.587l-.467 
            3.622h-3.12V24h6.116C23.403 24 24 
            23.403 24 22.676V1.325C24 .597 
            23.403 0 22.675 0z"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 
            2.633.344 3.608 1.319.975.975 
            1.257 2.242 1.319 3.608.058 1.266.07 
            1.646.07 4.85s-.012 3.584-.07 4.85c-.062 
            1.366-.344 2.633-1.319 3.608-.975.975-2.242 
            1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584
            -.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975
            -.975-1.257-2.242-1.319-3.608C2.175 
            15.584 2.163 15.204 2.163 12s.012-3.584.07
            -4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 
            2.242-1.257 3.608-1.319C8.416 
            2.175 8.796 2.163 12 2.163zm0-2.163C8.756 
            0 8.333.014 7.052.072 5.778.131 4.558.466 
            3.544 1.48 2.53 2.494 2.195 3.714 2.136 
            4.988.998 8.333 1 12 1 12s-.002 3.667.136 
            7.012c.059 1.274.394 2.494 1.408 3.508.964.964 
            2.183 1.299 3.457 1.358C8.333 23.986 
            8.756 24 12 24s3.667-.014 7.012-.136c1.274
            -.059 2.494-.394 3.508-1.408.964-.964 1.299
            -2.183 1.358-3.457C23.986 15.667 24 15.244 
            24 12s-.014-3.667-.136-7.012c-.059-1.274
            -.394-2.494-1.408-3.508C21.592 1.466 
            20.372 1.131 19.098 1.072 15.667.014 
            15.244 0 12 0z"
          />
          <path
            d="M12 5.838A6.162 6.162 0 0 0 5.838 12 
            6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 
            0 0 18.162 12 6.162 6.162 0 0 0 12 
            5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 
            8z"
          />
          <circle cx="18.406" cy="5.595" r="1.44" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M22.23 0H1.77C.79 0 0 .774 0 
            1.728v20.543C0 23.226.79 24 1.77 
            24h20.46c.98 0 1.77-.774 
            1.77-1.729V1.728C24 .774 23.21 
            0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 
            7.432a2.04 2.04 0 1 1 .001-4.081 
            2.04 2.04 0 0 1-.001 4.081zM20.452 
            20.452h-3.532v-5.605c0-1.336-.025
            -3.055-1.863-3.055-1.863 0-2.148 
            1.453-2.148 2.953v5.707H9.377V9h3.392
            v1.561h.048c.472-.894 1.623-1.833 
            3.341-1.833 3.572 0 4.229 2.351 
            4.229 5.406v6.318z"
          />
        </svg>
      ),
    },
    // Agrega más redes sociales si lo deseas
  ]

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div id="contacto" className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo y descripción */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="#inicio">
              <span className="cursor-pointer">
                <img
                  src="/logo.jpeg"
                  alt="INGESIBO Logo"
                  width={150}
                  height={50}
                />
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              INGESIBO: Comprometidos con la excelencia y la seguridad en cada proyecto.
            </p>
          </div>

          {/* Menú de navegación */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="footer-link cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y Redes Sociales */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <p className="text-gray-400 mb-4">
              Dirección: Av. Ejemplo 123, Ciudad, País
            </p>
            <p className="text-gray-400 mb-4">Teléfono: +51 123 456 789</p>
            <p className="text-gray-400 mb-6">Email: info@ingesibo.com</p>

            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon relative group overflow-hidden"
                  aria-label={social.name}
                >
                  <span className="flex items-center justify-center w-10 h-10 relative overflow-hidden">
                    <span className="absolute inset-0 bg-red-600 rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
                    <span className="relative text-white group-hover:text-white transition-colors duration-500 ease-out">
                      {social.icon}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-12 border-t border-gray-700" />

        {/* Derechos reservados */}
        <p className="mt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} INGESIBO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
