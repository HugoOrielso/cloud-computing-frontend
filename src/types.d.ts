interface UploadedFile  {
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