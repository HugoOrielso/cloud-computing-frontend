import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAxiosAuth } from "../../../../hooks/useAxiosHook";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import FileViewer from "./FileViewer";

const SingleProject = () => {
    const { id } = useParams()
    const axiosAuth = useAxiosAuth();
    const [project, setProject] = useState<Project | null>(null);
    const [files, setFiles] = useState<File[]>([]);

    async function getProject() {
        try {
            const request = await axiosAuth.get(`/files/projects/${id}`)
            if (request.status === 200) {
                setProject(request.data.project);
                setFiles(request.data.files);
            }
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                toast.error("Ocurrió un error al obtener los archivos");
            } else {
                toast.error("Error inesperado");
            }
        }
    }
    useEffect(() => {
        getProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="flex flex-col w-full gap-6 p-4 min-h-screen">
            <header>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold mb-4">Proyecto {id}</h1>
                    <button className="bg-red-500 cursor-pointer border border-red-400 focus:border-red-600 text-white p-3 rounded">
                        Delete
                    </button>
                </div>
            </header>
            <main>
                {project && (
                    <>
                        {files.length > 0 ? (
                            <FileViewer files={files} />
                        ) : (
                            <p className="text-gray-500">Este proyecto no tiene archivos fuente visibles.</p>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}

export default SingleProject