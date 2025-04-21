import {Server} from 'lucide-react'
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">ServerPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Servicios
            </a>
            <a href="#planes" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Planes
            </a>
            <a href="#clientes" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Clientes
            </a>
            <a href="#soporte" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Soporte
            </a>
            <a href="#contacto" className="text-sm font-medium transition-colors hover:text-emerald-600">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Iniciar Sesión
            </a>
            <button  className="bg-emerald-600 hover:bg-emerald-700">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Login