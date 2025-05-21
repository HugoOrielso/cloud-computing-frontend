import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const socket = io('http://localhost:4321', { withCredentials: true });

type DataPoint = {
    time: string;
    cpu: number;
    mem: number;
};

export default function SystemMonitorModal({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) {
    const [data, setData] = useState<DataPoint[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        socket.on('system_update', (payload: DataPoint) => {
            setData(prev => {
                const updated = [...prev, payload];
                return updated.slice(-30); // últimos 30 segundos
            });
        });

        return () => {
            socket.off('system_update');
        };
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
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                                    Uso del sistema en tiempo real
                                </Dialog.Title>

                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="time" />
                                        <YAxis domain={[0, 100]} unit="%" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="cpu" stroke="#f87171" name="CPU %" strokeWidth={2} dot={false} />
                                        <Line type="monotone" dataKey="mem" stroke="#60a5fa" name="RAM %" strokeWidth={2} dot={false} />
                                    </LineChart>
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
