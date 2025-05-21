import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

type ProjectStats = {
    name: string;
    requests: number;
    totalMB: number;
};

export default function ProjectTrafficModal({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) {
    const [data, setData] = useState<ProjectStats[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:4321/api/system/project-usage');
                const rawData = res.data;
                const parsed: ProjectStats[] = Object.entries(rawData).map(([folder, stats]: any) => ({
                    name: folder,
                    requests: stats.requests,
                    totalMB: +(stats.totalBytes / 1024 / 1024).toFixed(2)
                }));
                setData(parsed);
            } catch (err) {
                console.error('Error obteniendo métricas por proyecto:', err);
            }
        };

        fetchData();
    }, [isOpen]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/40" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4">
                                    Tráfico estimado por proyecto
                                </Dialog.Title>

                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis yAxisId="left" />
                                        <YAxis yAxisId="right" orientation="right" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar yAxisId="left" dataKey="requests" fill="#60a5fa" name="Peticiones" />
                                        <Bar yAxisId="right" dataKey="totalMB" fill="#f87171" name="MB Servidos" />
                                    </BarChart>
                                </ResponsiveContainer>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
