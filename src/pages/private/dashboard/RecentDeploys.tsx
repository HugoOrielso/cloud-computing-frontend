
import { Check, Computer, GitBranch, GitCommit } from 'lucide-react'
import { useAxiosAuth } from '../../../hooks/useAxiosHook';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { isAxiosError } from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es'; // para español
import NoDeployment from './NoDeployment';

dayjs.extend(relativeTime);
dayjs.locale('es')
const RecentDeploys = () => {
    const axiosAuth = useAxiosAuth();
    const [projects, setProjects] = useState<ProyectoMetrica[]>([])
    async function getProjects() {
        try {
            const response = await axiosAuth.get<ProyectoMetrica[]>("/files/projects-metricas");
            if (response.status === 204 || response.data.length === 0) {
                toast.info("No tienes despliegues");
                return;
            }
            setProjects(response.data);
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                toast.error("Ocurrió un error al traer tus métricas");
            } else {
                toast.error("Error inesperado");
            }
        }
    }

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='h-full w-full flex'>
            {projects.length === 0 && <NoDeployment />}
            {projects.length > 0 &&
                <>
                    <div className="mb-8 h-full w-full">
                        <h2 className="text-lg font-semibold mb-4">Despliegues Recientes</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                projects.map((item) => {
                                    return (
                                        <div className="">
                                            <div className="bg-white rounded-lg h-full shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                                                <div className="p-1 bg-green-500"></div>
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center">
                                                            <div className="bg-green-100 p-2 rounded-md">
                                                                <Check className="h-5 w-5 text-green-600" />
                                                            </div>
                                                            <h3 className="ml-3 font-medium">{item.folder_name}</h3>
                                                        </div>
                                                        <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Completado</span>
                                                    </div>
                                                    <div className="space-y-2">
                                                        {
                                                            item.uploaded_from === 'github' &&
                                                            <div className="flex justify-between text-sm">
                                                                <span className="text-gray-500">Desde:</span>
                                                                <div className='flex items-center gap-1'>
                                                                    <span> <GitBranch className='h-4 w-4 mr-1' /> </span>
                                                                    <span>{item.uploaded_from}</span>
                                                                </div>
                                                            </div>
                                                        }
                                                        {
                                                            item.uploaded_from === 'local' &&
                                                            <div className="flex justify-between text-sm">
                                                                <span className="text-gray-500">Desde:</span>
                                                                <div className='flex items-center gap-1'>
                                                                    <span> <Computer className='h-4 w-4 mr-1' /> </span>
                                                                    <span>{item.uploaded_from}</span>
                                                                </div>
                                                            </div>
                                                        }
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Subido:</span>
                                                            <p className="text-sm text-gray-500"> {dayjs(item.created_at).fromNow()}</p>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Archivos totales: </span>
                                                            <span>{item.num_files_total}</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-gray-500">Tamaño:</span>
                                                            <span>{item.size_mb} MB</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.uploaded_from === 'github' &&
                                                        <div className='border rounded p-1 border-zinc-300'>
                                                            <div className='flex text-gray-500 items-center gap-2'>
                                                                <span> {item.commit_message}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <span className="flex items-center gap-1 text-gray-500">
                                                                    <GitCommit /><span>Por:</span>
                                                                </span>
                                                                <span>{item.commit_author} </span>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default RecentDeploys