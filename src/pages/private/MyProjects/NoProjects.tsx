import { FolderPlus } from "lucide-react"

const NoProjects = () => {
  return (
    <div className="flex h-full flex-1 w-full flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-emerald-50 rounded-full">
        <FolderPlus className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">No hay proyectos</h3>
      <p className="mb-6 text-gray-500 max-w-md">
        Aún no has creado ningún proyecto. Comienza subiendo tu primer proyecto para aprovechar todas las
        funcionalidades de ServerPro.
      </p>
    </div>
  )
}

export default NoProjects