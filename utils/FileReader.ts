import { readFile } from 'fs/promises';

class FileReader {
    async read(file: string) {
        try {
            return readFile(file);
        } catch (err) {
            console.error('Error while reading file: ', err);
        }
    }

    async readToText(file: string): Promise<string> {
        const content = await this.read(file);

        return content?.toString() || '';
    }
}

export default new FileReader();