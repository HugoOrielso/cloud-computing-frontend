import { ArrowRight, CheckCircle2 } from 'lucide-react'

const Cover = () => {
  return (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className=" max-w-[1500px] px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <div  className="inline-flex border-emerald-600 text-emerald-600">
                    Soluciones de Hosting Web Profesional
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    El mejor espacio para tu sitio web
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Hosting confiable, rápido y seguro para tus proyectos web. Planes flexibles para sitios personales y
                    empresariales.
                </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button  className="flex items-center justify-between p-3 border bg-emerald-600 hover:bg-emerald-700">
                        Ver Planes <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button >
                        Contactar Ventas
                    </button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Instalación en 1-Click</span>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img className='aspect-square object-cover rounded-lg' src="assets/clouding.webp" alt="clouding image" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Cover