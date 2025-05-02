import { toast } from "sonner";
import { useAxiosAuth } from "../../../hooks/useAxiosHook";
import axios from "axios";
import { useEffect, useState } from "react";
import { Calendar, Clock, Code, FolderOpen, MoreVertical, Users } from "lucide-react";

const MyProjects = () => {

    const axiosAuth = useAxiosAuth();
    const [projects, setProjects] = useState<Project[]>([])

    async function getProjects() {
        try {
            const request = await axiosAuth.get('files/projects')

            if (request.status === 200) {
                setProjects(request.data.projects)
                toast.success("Lista de proyectos, obtenida")
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast.error("Error subiendo los archivos: " + err.response?.data?.message || "Sin detalles");
            } else {
                toast.error("Error inesperado");
            }
        }

    }
    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col w-full gap-6 p-4 min-h-screen">

            <header>
                <h1 className="text-xl font-semibold mb-4">Mis Proyectos</h1>
            </header>
            <main className="w-full h-full flex flex-1  ">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((proyecto) => (
                            <article
                                key={proyecto.id}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-200 bg-white"
                            >
                                {/* Cabecera de la tarjeta */}
                                <div className="relative">
                                    <div className="p-5">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                                                    <FolderOpen className="h-6 w-6 text-emerald-600" />
                                                </div>

                                                    <p>{proyecto.project_name}</p>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreVertical className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Cuerpo de la tarjeta */}
                                <div className="px-5 pb-2">
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta laborum saepe vel assumenda, facere, dolores impedit dolorem eligendi corrupti repellendus deserunt ullam enim itaque perspiciatis laudantium minima quidem consectetur.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {proyecto.files.map((tech, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                                {tech.filename.split(".")[1]}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pie de la tarjeta */}
                                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 text-xs text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>
                                                {new Date(proyecto.created_at).toLocaleDateString("es-ES", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-1" />
                                            <span>{proyecto.project_name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />

                                        </div>
                                    </div>
                                </div>

                                {/* Botones de acción */}
                                <div className="border-t border-gray-200 grid grid-cols-2 divide-x divide-gray-200">
                                    <button className="py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition flex items-center justify-center">
                                        <Code className="h-4 w-4 mr-2" />
                                        Ver código
                                    </button>
                                    <button className="py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition flex items-center justify-center">
                                        <FolderOpen className="h-4 w-4 mr-2" />
                                        Abrir proyecto
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyProjects