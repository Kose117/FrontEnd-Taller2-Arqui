import AuthForm from "@/components/organisms/Auth-form"
import { FormField } from "@/types/formTypes"
import { LoginInput, User } from "../../types"
import fondoFrutal from "../../assets/Fondo.jpg"

interface AuthTemplateProps {
  loginFields: FormField[]
  registryFields: FormField[]
  onLogin: (values: LoginInput) => void
  onRegister: (values: User) => void
}

export default function AuthTemplate({
  loginFields,
  registryFields,
  onLogin,
  onRegister,
}: AuthTemplateProps) {
  return (
    <main
      className="flex items-center justify-center h-screen p-4 overflow-x-auto"
      style={{ backgroundImage: `url(${fondoFrutal})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <AuthForm
        loginFields={loginFields}
        registryFields={registryFields}
        onLogin={onLogin}
        onRegister={onRegister}
      />
      </section>
    </main>
  )
}
