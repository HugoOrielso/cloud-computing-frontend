import { AlertCircle, Check, FileUp, FolderUp, Loader2, Upload, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { toast } from 'sonner'
import { useAxiosAuth } from '../../../hooks/useAxiosHook';
import axios from 'axios';
const FormDeployFormLocal = () => {
    const axiosAuth = useAxiosAuth();
    const [isDragging, setIsDragging] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [uploading, setUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.items) {
            const newFiles: File[] = []
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                newFiles.push(e.dataTransfer.files[i])
            }

            setFiles([...files, ...newFiles])
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles: File[] = []

            for (let i = 0; i < e.target.files.length; i++) {
                newFiles.push(e.target.files[i])
            }

            setFiles([...files, ...newFiles])
        }
    }

    const removeFile = (index: number) => {
        const newFiles = [...files]
        newFiles.splice(index, 1)
        setFiles(newFiles)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (files.length === 0) return;

        const data = Object.fromEntries(new FormData(e.currentTarget)) as { projectName: string, uploadedFrom: string };
        const { projectName, uploadedFrom } = data;
        if (!projectName || !uploadedFrom) {
            toast.warning("Por favor provee un nombre para tu proyectoñ")
        }
        setUploading(true);

        try {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append("files", file);
            });
            formData.append("projectName", projectName)
            formData.append("uploadedFrom", uploadedFrom)
            const response = await axiosAuth.post("/files/uploadFromLocal", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status === 200) {
                toast.success("Archivos subidos correctamente");
                setFiles([]);
            }
            setUploadStatus("success");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast.error("Error subiendo los archivos: " + err.response?.data?.message || "Sin detalles");
            } else {
                toast.error("Error inesperado");
            }
            setUploadStatus("error");
        } finally {
            setUploading(false);
        }
    };



    return (
        <div className='w-full flex'>
            <section className="bg-white w-full border border-gray-200 rounded-lg p-6 mb-8">

                <form onSubmit={handleSubmit} className='gap-2 flex flex-col w-full'>
                    <div>
                        <label htmlFor="projectName">
                            Nombre del proyecto:
                            <input required type="text" id='projectName' name='projectName' className='p-2 border border-gray-300 w-full rounded focus:border-emerald-400 transition duration-200' />
                        </label>
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
                            defaultValue={"local"}
                        />
                    </div>
                    <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-emerald-400"} transition-colors duration-200`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <FolderUp className="h-12 w-12 text-emerald-500 mb-3" />
                            <h3 className="text-lg font-medium mb-2">Arrastra y suelta tu carpeta aquí</h3>
                            <p className="text-gray-500 mb-4">O selecciona los archivos manualmente</p>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                multiple
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition flex items-center cursor-pointer"
                            >
                                <FileUp className="mr-2 h-5 w-5" />
                                Seleccionar Carpeta
                            </button>
                        </div>
                    </div>

                    {files.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium mb-3">Archivos seleccionados ({files.length})</h3>
                            <div className="border rounded-lg overflow-hidden">
                                <div className="max-h-[300px] overflow-y-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Nombre
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Tamaño
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Tipo
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Acción
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {files.map((file, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {file.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {(file.size / 1024).toFixed(2)} KB
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {file.type || "Carpeta"}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            type="button"
                                                            onClick={() => removeFile(index)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <X className="h-5 w-5" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {uploadStatus !== "idle" && (
                        <div
                            className={`mt-4 p-4 rounded-lg ${uploadStatus === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                                }`}
                        >
                            <div className="flex items-center">
                                {uploadStatus === "success" ? (
                                    <Check className="h-5 w-5 mr-2" />
                                ) : (
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                )}
                                <p>
                                    {uploadStatus === "success"
                                        ? "Archivos subidos correctamente"
                                        : "Error al subir los archivos. Intente nuevamente."}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Botón de envío */}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={files.length === 0 || uploading}
                            className={`py-2 px-6 rounded flex items-center ${files.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-emerald-500 text-white hover:bg-emerald-600"
                                } transition`}
                        >
                            {uploading ? (
                                <button className='flex cursor-pointer'>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    <span>
                                        Subiendo...
                                    </span>
                                </button>
                            ) : (
                                <button className='flex cursor-pointer'>
                                    <Upload className="mr-2 h-5 w-5" />
                                    <span>
                                        Subir Archivos
                                    </span>
                                </button>
                            )}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default FormDeployFormLocal