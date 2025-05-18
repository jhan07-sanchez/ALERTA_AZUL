import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Crear una cuenta</h1>
          <p className="mt-2 text-gray-600">Únete a nosotros para proteger los océanos</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">Nombre</Label>
                <Input id="first-name" type="text" placeholder="Juan" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="last-name">Apellido</Label>
                <Input id="last-name" type="text" placeholder="Pérez" required className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@ejemplo.com" required className="mt-1" />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" required className="mt-1" />
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" required className="mt-1" />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Acepto los{" "}
              <Link href="#" className="text-teal-600 hover:text-teal-500">
                términos y condiciones
              </Link>
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800">
              Registrarse
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-teal-600 hover:text-teal-500">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
