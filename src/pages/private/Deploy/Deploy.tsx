import { Check, GitBranch, Github, Play, RefreshCw } from 'lucide-react'
import { useState } from 'react'

const Deploy = () => {

    const [deploymentName, setDeploymentName] = useState("")
    const [repositoryUrl, setRepositoryUrl] = useState("")
    const [branch, setBranch] = useState("main")
    const [isDeploying, setIsDeploying] = useState(false)
  

  
    const handleDeploy = (e: { preventDefault: () => void }) => {
      e.preventDefault()
      if (!deploymentName || !repositoryUrl) return
  
      setIsDeploying(true)
  
      // Simulación de despliegue
      setTimeout(() => {
        setIsDeploying(false)
        setDeploymentName("")
        setRepositoryUrl("")
        setBranch("main")
      }, 3000)
    }
  
  return (
    <div className="flex flex-col w-full gap-6">
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Desplegar Nuevo Proyecto</h2>
          <p className="text-gray-500 mt-1">Configura y despliega tu aplicación en nuestra plataforma</p>
        </div>
        <form onSubmit={handleDeploy} className="p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Proyecto
              </label>
              <input
                type="text"
                id="project-name"
                value={deploymentName}
                onChange={(e) => setDeploymentName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="mi-aplicacion"
                required
              />
            </div>

            <div>
              <label htmlFor="repository" className="block text-sm font-medium text-gray-700 mb-1">
                Repositorio Git
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Github className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="repository"
                  value={repositoryUrl}
                  onChange={(e) => setRepositoryUrl(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="https://github.com/usuario/repositorio"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
                Rama
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <GitBranch className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="main"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="framework" className="block text-sm font-medium text-gray-700 mb-1">
                  Framework
                </label>
                <select
                  id="framework"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="auto">Detección automática</option>
                  <option value="nextjs">Next.js</option>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                  <option value="angular">Angular</option>
                  <option value="node">Node.js</option>
                </select>
              </div>

              <div>
                <label htmlFor="node-version" className="block text-sm font-medium text-gray-700 mb-1">
                  Versión de Node.js
                </label>
                <select
                  id="node-version"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="18">Node.js 18.x (LTS)</option>
                  <option value="20">Node.js 20.x (LTS)</option>
                  <option value="16">Node.js 16.x</option>
                  <option value="14">Node.js 14.x</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Configuración Avanzada</label>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center">
                  <input
                    id="auto-deploy"
                    name="auto-deploy"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="auto-deploy" className="ml-2 block text-sm text-gray-700">
                    Despliegue automático en cada push
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    id="build-cache"
                    name="build-cache"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="build-cache" className="ml-2 block text-sm text-gray-700">
                    Habilitar caché de compilación
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 mr-3"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isDeploying}
                className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center ${
                  isDeploying ? "bg-emerald-400" : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {isDeploying ? (
                  <>
                    <RefreshCw className="animate-spin h-4 w-4 mr-2" />
                    Desplegando...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Desplegar Proyecto
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    {/* Deployment Info */}
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="p-6 border-b">
          <h3 className="font-semibold">Recursos Disponibles</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">CPU</span>
                <span className="text-sm text-gray-500">2 vCPUs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Memoria</span>
                <span className="text-sm text-gray-500">4 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Almacenamiento</span>
                <span className="text-sm text-gray-500">20 GB SSD</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Ancho de banda</span>
                <span className="text-sm text-gray-500">1 TB / mes</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="font-semibold">Despliegues Recientes</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium">api-gateway</h4>
                <p className="text-xs text-gray-500">Desplegado hace 5 minutos</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium">frontend-dashboard</h4>
                <p className="text-xs text-gray-500">Desplegado hace 30 minutos</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium">auth-service</h4>
                <p className="text-xs text-gray-500">Desplegando...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Deploy