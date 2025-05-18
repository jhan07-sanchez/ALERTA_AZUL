import LoginForm from "@/components/LoginForm"
import Navbar from "@/components/Navbar"

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <LoginForm />
      </div>
    </>
  )
}
