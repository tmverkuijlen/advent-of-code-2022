import FileConverter from "../utils/FileConverter";
import Letter from "./letter";
import Rucksack from "./rucksack";

const chunk = (arr: any[], size: number) => {
    // @ts-ignore
    return Array.from({ length: arr.length / 3 }, () => arr.splice(0, size));
}

const findBadge = (arr: string[]) => {
    const [first, second, last] = arr;

    for (let item of last.split('')) {
        if (first.includes(item) && second.includes(item)) {
            return item;
        }
    }

    return '';
}

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-3.txt');

    const result = content.map(row => new Rucksack(row).itemsInBothCompartments())
        .map(l => new Letter(l).priority())
        .reduce((a, b) => a + b, 0);
    
    
    console.log('first', result);

    const second = chunk(content, 3)
        .map(rows => new Letter(findBadge(rows)).priority())
        .reduce((a, b) => a + b, 0);

    console.log('second', second);
}