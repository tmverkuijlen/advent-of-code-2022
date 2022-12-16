import FileConverter from "../utils/FileConverter";
import Program from "./program";

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-10.txt');

    const program = new Program();

    program.run(content);

    console.log('first', program.signalStrength());
}