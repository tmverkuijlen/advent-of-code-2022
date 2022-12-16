import FileReader from "./FileReader";

class FileConverter {
    async readAndConvertCsvToRows(file: string) {
        const content = await FileReader.readToText(file);

        return content.split('\r\n');
    }
}

export default new FileConverter();