import { Check, Clock, GitBranch, RefreshCw, X } from 'lucide-react'

const RecentDeploys = () => {
  return (
    <div>              
        <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Despliegues Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-green-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-md">
                    <Check className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="ml-3 font-medium">api-gateway</h3>
                </div>
                <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Completado</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    main
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>Hace 5 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Producción</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver detalles
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Reiniciar
                </a>
            </div>
            </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-yellow-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-md">
                    <RefreshCw className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="ml-3 font-medium">auth-service</h3>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full">
                En progreso
                </span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    feature/oauth
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>Hace 2 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Desarrollo</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver logs
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Cancelar
                </a>
            </div>
            </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-green-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-md">
                    <Check className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="ml-3 font-medium">frontend-dashboard</h3>
                </div>
                <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Completado</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    develop
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>Hace 30 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Staging</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver detalles
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Reiniciar
                </a>
            </div>
            </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-red-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-md">
                    <X className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="ml-3 font-medium">payment-service</h3>
                </div>
                <span className="text-xs bg-red-100 text-red-800 py-1 px-2 rounded-full">Fallido</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    feature/stripe
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>Hace 45 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Desarrollo</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver error
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Reintentar
                </a>
            </div>
            </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-blue-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-md">
                    <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="ml-3 font-medium">notification-service</h3>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Programado</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    main
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>En 15 minutos</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Producción</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver detalles
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Cancelar
                </a>
            </div>
            </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="p-1 bg-green-500"></div>
            <div className="p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-md">
                    <Check className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="ml-3 font-medium">user-service</h3>
                </div>
                <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Completado</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rama:</span>
                <span className="font-medium flex items-center">
                    <GitBranch className="h-3 w-3 mr-1" />
                    main
                </span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tiempo:</span>
                <span>Hace 2 horas</span>
                </div>
                <div className="flex justify-between text-sm">
                <span className="text-gray-500">Entorno:</span>
                <span>Producción</span>
                </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                Ver detalles
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Reiniciar
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
  )
}

export default RecentDeploys