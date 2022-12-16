import FileConverter from "../utils/FileConverter"

const caloriesToElfs = (input: string[]) => {
    const elfs: number[] = [];
    let calories = 0;
    for (let row of input) {
        if (!row) {
            elfs.push(calories);
            calories = 0;
            continue;
        }

        calories += parseInt(row);
    }

    return elfs;
}

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-1.txt');
    const elfs = caloriesToElfs(content);
    elfs.sort((a, b) => b - a);

    // first half
    console.log('first half', elfs[0]);

    // second half
    console.log('second', elfs[0] + elfs[1] + elfs[2]);
}