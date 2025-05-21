import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";



export default function FileViewer({ files }: { files: File[] }) {
    const [selected, setSelected] = useState(files[0]?.filename || '');
    const activeFile = files.find((f) => f.filename === selected);

    return (
        <div className="">
            <nav className="flex gap-2 ">
                {files.map((file) => (
                    <button
                        key={file.filename}
                        onClick={() => setSelected(file.filename)}
                        className={`px-3 cursor-pointer py-1 text-sm rounded-t-md ${selected === file.filename
                                ? "bg-emerald-200 font-semibold"
                                : "bg-gray-100"
                            }`}
                    >
                        {file.filename}
                    </button>
                ))}
            </nav>

            <section className="p-4 bg-gray-900 text-white  overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeFile && (
                            <SyntaxHighlighter
                                language={getLanguage(activeFile.extension)}
                                style={dracula}
                                wrapLongLines
                                customStyle={{ margin: 0, padding: "1rem", fontSize: "0.85rem" }}
                            >
                                {activeFile.content}
                            </SyntaxHighlighter>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
}

function getLanguage(ext: string) {
    switch (ext) {
        case '.html':
            return 'html';
        case '.css':
            return 'css';
        case '.js':
            return 'javascript';
        default:
            return 'text';
    }
}
