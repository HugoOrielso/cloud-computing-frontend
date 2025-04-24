import { Upload } from "lucide-react"
import RecentDeploys from "./RecentDeploys"


const Main = () => {



  return (
    <main className="flex flex-col gap-6 w-full">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Despliegue Rápido</h2>
            <p className="opacity-90 max-w-md">
                Despliega tu aplicación en segundos con nuestra plataforma optimizada para desarrolladores.
            </p>
            </div>
            <div>
            <button
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-all"
            >
                <Upload className="h-5 w-5 mr-2" />
                Desplegar Ahora
            </button>
            </div>
        </div>
        </div>

        <div>
            <RecentDeploys/>
        </div>


    </main>
  )
}

export default Main