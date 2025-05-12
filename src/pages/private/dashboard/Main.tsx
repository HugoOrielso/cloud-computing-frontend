import RecentDeploys from "./RecentDeploys"


const Main = () => {

    return (
        <main className="flex flex-col gap-6 h-full w-full">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg py-8 overflow-hidden">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-white mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Despliegue Rápido</h2>
                        <p className="opacity-90 max-w-md">
                            Despliega tu aplicación en segundos con nuestra plataforma optimizada para desarrolladores.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full flex w-full">
                <RecentDeploys />
            </div>
        </main>
    )
}

export default Main