import FileConverter from "../utils/FileConverter";
import Section from "./Section"

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-4.txt');
    
    let count = 0;
    let second = 0;
    for (let row of content) {
        const [one, two] = row.split(',').map(o => new Section(o));

        if (one.fullyContains(two)) {
            count++;
        }

        if (one.overlaps(two)) {
            second++;
        }
    }

    console.log('first', count);
    console.log('second', second);
}