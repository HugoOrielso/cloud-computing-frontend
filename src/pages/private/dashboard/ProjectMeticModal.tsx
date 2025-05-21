import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function ProjectMetricModal({
    isOpen,
    setIsOpen,
    project
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    project: {
        num_html_files: number;
        num_css_files: number;
        num_js_files: number;
        referencias_externas: number;
        size_mb: number;
        folder_name: string;
    };
}) {
    const data = [
        { name: 'HTML', value: project.num_html_files },
        { name: 'CSS', value: project.num_css_files },
        { name: 'JS', value: project.num_js_files },
        { name: 'Referencias externas', value: project.referencias_externas }
    ];

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
                    <div className="fixed inset-0 bg-black/30" />
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium text-gray-900 mb-2">
                                    Métricas: {project.folder_name}
                                </Dialog.Title>
                                <div className="text-sm text-gray-600 mb-4">
                                    Tamaño total: {project.size_mb} MB
                                </div>

                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={data}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#8884d8">
                                            {data.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Bar>
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
