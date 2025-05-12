import { Rocket } from 'lucide-react'

const NoDeployment = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-emerald-50 rounded-full">
        <Rocket className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">No hay despliegues recientes</h3>
      <p className="mb-6 text-gray-500 max-w-md">
        Aún no has realizado ningún despliegue. Sube tu primer proyecto para comenzar a utilizar nuestra plataforma
        optimizada.
      </p>
    </div>
  )
}

export default NoDeployment