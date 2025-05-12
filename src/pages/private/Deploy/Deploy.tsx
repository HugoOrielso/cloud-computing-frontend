import { useState } from "react"
import * as motion from "motion/react-client"
import FormDeployFromLocal from "./FormDeployFromLocal"
import FormDeployFromGithub from "./FormDeployFromGithub"
import { AnimatePresence } from "motion/react";

const Deploy = () => {
    const [selected, setSelected] = useState("local");
    const tabs = [
        { label: "Desde tu PC", value: "local" },
        { label: "Desde GitHub", value: "github" },
    ];
    return (
        <div className='p-4'>
            <h1 className="text-xl font-semibold mb-4">Subir Carpeta con Archivos</h1>
            <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <div><h1>Elige una opción:</h1></div>
                <nav className="flex gap-2 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setSelected(tab.value)}
                            className={`px-4 py-2 cursor-pointer rounded ${selected === tab.value ? "bg-emerald-200" : "bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </section>
            <section className="max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                        className="w-full flex"
                    >
                        {selected === "local" ? <FormDeployFromLocal /> : <FormDeployFromGithub />}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    )
}

export default Deploy