import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+51981468905 " // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src="https://cdn-icons-png.freepik.com/256/3991/3991765.png"
          alt="WhatsApp Icon"
          width={56}
          height={56}
          className="rounded-full"
        />
      </div>
    </Link>
  )
}
