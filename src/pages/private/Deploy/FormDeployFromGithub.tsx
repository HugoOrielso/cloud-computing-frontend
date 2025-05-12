import { Github } from 'lucide-react'
import React, { useState } from 'react'
import { useAxiosAuth } from '../../../hooks/useAxiosHook';
import { toast } from 'sonner';
import axios from 'axios';

const FormDeployFromGithub = () => {
    const axiosAuth = useAxiosAuth();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateUrl = (url: string) => {
        if (!url) return "La URL de GitHub es requerida"
        if (!url.startsWith("http")) return "Debe ser una URL válida"
        if (!url.includes("github.com")) return "La URL debe ser de GitHub"
        return ""
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.currentTarget)) as { repoUrl: string, folder: string, projectName: string };
        const validationError = validateUrl(data.repoUrl)
        if (validationError) {
            toast.error(validationError)
            return
        }

        setIsSubmitting(true)

        try {
            const response = await axiosAuth.post("/files/uploadFromGithub", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                toast.success("Proyecto subido correctamente")
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast.error("Error subiendo los archivos: " + err.response?.data?.message || "Sin detalles");
            } else {
                toast.error("Error inesperado");
            }
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                        <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Repositorio GitHub</h1>

                <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
                    Ingresa la información del repositorio de GitHub
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Campo repoUrl */}
                    <div>
                        <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            URL del Repositorio *
                        </label>

                        <input
                            type="text"
                            id="repoUrl"
                            name="repoUrl"
                            placeholder="https://github.com/usuario/repositorio"
                            className={`w-full px-3 py-2 border rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                        `}
                        />

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Ejemplo: https://github.com/vercel/next.js</p>

                    </div>

                    {/* Campo folder */}
                    <div>
                        <label htmlFor="folder" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Carpeta (opcional)
                        </label>

                        <input
                            type="text"
                            id="folder"
                            name="folder"
                            placeholder="examples/with-tailwindcss"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Ruta de la carpeta dentro del repositorio</p>
                    </div>

                    {/* Campo projectName */}
                    <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Nombre del Proyecto *
                        </label>

                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Mi Proyecto"
                            className={`w-full px-3 py-2 border rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       `}
                        />

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Nombre para identificar tu proyecto</p>

                    </div>

                    <div className='hidden'>
                        <input
                            type="text"
                            id="uploadedFrom"
                            name="uploadedFrom"
                            placeholder="Mi Proyecto"
                            className={`w-full px-3 py-2 border rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       `}
                       defaultValue={"github"}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full cursor-pointer py-2 px-4 rounded-md text-white font-medium ${isSubmitting ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 "}`
                        }
                    >
                        {isSubmitting ? "Enviando..." : "Enviar Información"}
                    </button>
                </form>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Los campos marcados con * son obligatorios
                </p>
            </div>
        </div>
    )
}

export default FormDeployFromGithub