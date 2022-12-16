import FileConverter from "../utils/FileConverter";

const MARKER_SIZE = 14;

const containsDuplicates = (arr: string[]) => {
    if (arr.length !== new Set(arr).size) {
        return true;
      }
    
      return false;
}

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-6.txt');

    const buffer = content[0].split('');

    for (let i = MARKER_SIZE; i < buffer.length; i++) {
        const arr = buffer.slice(i - MARKER_SIZE, i);

        if (!containsDuplicates(arr)) {
            console.log(i);
            break;
        }
    }
}