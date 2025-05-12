interface UploadedFile {
    id: string;
    filename: string;
    filepath: string;
};

interface Project {
    id: string;
    project_name: string;
    folder_name: string;
    url: string;
    created_at: string;
    files: UploadedFile[];
};

interface ProyectoMetrica {
    id: number;
    project_name: string;
    folder_name: string;
    uploaded_from: string;
    url: string;
    created_at: string;
    num_files_total: number;
    num_html_files: number;
    num_css_files: number;
    num_js_files: number;
    size_mb: number;
    has_index_html: boolean;
    commit_hash?: string;
    commit_message?: string;
    commit_date?: string;
    commit_author?: string;
}

interface File {
    filename: string;
    extension: string;
    content: string;
}