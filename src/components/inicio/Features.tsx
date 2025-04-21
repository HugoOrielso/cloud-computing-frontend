import { BarChart3, Clock, Cpu, Globe, Headset, Shield } from 'lucide-react'

const Features = () => {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-[1500px] px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <p className="border-emerald-600 text-emerald-600">
            Características
          </p>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            ¿Por qué elegir nuestro hosting?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Descubre las ventajas que nos diferencian de la competencia y hacen que nuestros servicios sean la
            elección ideal para tu sitio web.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Shield className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Seguridad Avanzada</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Protección contra malware, certificados SSL gratuitos y backups automáticos.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Cpu className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Alto Rendimiento</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Servidores SSD, caché optimizado y tecnología de última generación.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Globe className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Dominio Gratis</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Dominio gratuito el primer año con todos nuestros planes de hosting.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Clock className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Disponibilidad 99.9%</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Garantizamos un tiempo de actividad superior con monitoreo constante.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <BarChart3 className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Instalador en 1-Click</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Instala WordPress, Joomla, PrestaShop y más con un solo clic.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Headset className="h-12 w-12 text-emerald-600" />
          <h3 className="text-xl font-bold">Soporte 24/7</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Equipo de expertos disponible en todo momento para resolver cualquier duda.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features