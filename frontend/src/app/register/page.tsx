import RegisterForm from "@/components/RegisterForm"
import Navbar from "@/components/Navbar"

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <RegisterForm />
      </div>
    </>
  )
}
