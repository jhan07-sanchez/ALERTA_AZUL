import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
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
  )
}
