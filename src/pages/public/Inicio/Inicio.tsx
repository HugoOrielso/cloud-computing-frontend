import { Server } from 'lucide-react'
import Features from '../../../components/inicio/Features'
import Cover from '../../../components/inicio/Cover'

const Inicio = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center w-full">
            <header className="sticky px-4 top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className=" flex h-16 items-center justify-between">
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
                        <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 text-white  h-10 py-2 px-4 text-sm  hover:bg-emerald-700">
                            Comenzar Ahora
                        </button>
                    </div>
                </div>
            </header>
            <main className='flex-1 w-full'>

                <Cover/>
                <Features/>

            </main>
        </div>
    )
}

export default Inicio