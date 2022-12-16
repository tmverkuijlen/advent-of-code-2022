import FileConverter from "../utils/FileConverter";
import Stack from "./stack";

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-5.txt');

    const stacks: Stack[] = [];

    // add new stacks
    const width = content[0].split('').length;
    const amountOfStacks = Math.ceil(width / 4);

    for (let i = 0; i < amountOfStacks; i++) {
        stacks.push(new Stack());
    }

    // fill stacks

    // generate stack
    let stackIsFilled = false;
    for (let row of content) {
        if (stackIsFilled) {
            const [_a, amount, _b, from, _c, to] = row.split(' ').map(s => parseInt(s));

            stacks[from - 1].move(stacks[to - 1], amount);

            continue;
        }

        // generate stack
        const parts = row.split('');
        for (let i = 1; i < parts.length; i += 4) {
            if (!isNaN(parseInt(parts[i]))) {
                break;
            }

            const stack = stacks[Math.ceil(i / 4) - 1];
            if (parts[i] && parts[i] !== ' ') {
                stack.crates.unshift(parts[i]);
            }
        }

        if (!parts.filter(o => o).length) {
            stackIsFilled = true;
        }

    }

    // console.log(stacks);
    console.log(stacks.map(s => `[${s.top()}]`).join(', '));
}