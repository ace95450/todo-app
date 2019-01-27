export class FileUpload {

    key: string;
    title: string;
    author: string;
    name?: string;
    url: string;
    file: File;

    constructor(file: File) {
        this.file = file;
    }
}
