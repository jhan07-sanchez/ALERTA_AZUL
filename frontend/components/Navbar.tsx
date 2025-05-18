import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="ECOAVIST Logo" width={40} height={40} className="rounded-full" />
        <span className="text-xl font-bold text-teal-700">ECOAVIST</span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="text-gray-600 hover:text-teal-700">
          Acerca de
        </Link>
        <Link href="#" className="text-gray-600 hover:text-teal-700">
          Más información
        </Link>
        <Link href="#" className="text-gray-600 hover:text-teal-700">
          Colaboradores
        </Link>
        <Link href="#" className="text-gray-600 hover:text-teal-700">
          Ayuda
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="/login" className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors">
          Entrar
        </Link>
        <Link
          href="/register"
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          Registrarse
        </Link>
      </div>
    </header>
  )
}
