import FileConverter from "../utils/FileConverter";
import Terminal from "./terminal";

const TOTAL_SPACE = 70000000;
const SPACE_NEEDED = 30000000;

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-7.txt');

    const terminal = new Terminal(content);

    terminal.read();

    const sum = Object.values<number>(terminal.directories)
        .filter(v => v < 100000)
        .reduce((a, b) => {
            return a + b;
        }, 0);

    console.log('first', sum);

    const usedSpace = terminal.directories['/'];
    const spaceToFree = usedSpace - (TOTAL_SPACE - SPACE_NEEDED);

    console.log('to free', spaceToFree);

    console.log(terminal.directories['/']);

    const second = Math.min(...Object.values<number>(terminal.directories)
        .filter(v => v >= spaceToFree));

    console.log(second);
}