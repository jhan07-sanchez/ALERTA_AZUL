import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
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
          <Link
            href="/login"
            className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors"
          >
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

      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            El océano es el hogar de miles de especies.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">Ayúdanos a protegerlas.</p>
          <Link
            href="/start"
            className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors inline-block text-lg"
          >
            Comienza ahora
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-teal-700">
            <Image src="/ocean-turtle.jpg" alt="Tortuga marina en el océano" fill className="object-cover" priority />
          </div>
        </div>
      </section>
    </main>
  )
}
