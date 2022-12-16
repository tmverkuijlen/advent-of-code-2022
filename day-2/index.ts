import FileConverter from "../utils/FileConverter";
import Paper from "./paper";
import Rock from "./rock";
import Scissors from "./scissors";

type choice = 'A'|'B'|'C'|'X'|'Y'|'Z';

const factory = (input: choice) => {
    if (['A', 'X'].includes(input)) {
        return new Rock();
    }

    if (['B', 'Y'].includes(input)) {
        return new Paper();
    }

    return new Scissors();
}



export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-2.txt');

    let score = 0;
    for (let row of content) {
        const [opponent, me] = row.split(' ').map(i => factory(i as choice));

        const result = me.against(opponent);

        score += result + me.points;
    }

    console.log('first', score);

    // Second
    let second = 0;

    for (let row of content) {
        const [a, b] = row.split(' ');

        const opponent = factory(a as choice);
        const me = opponent.opponent(b as 'X'|'Y'|'Z');

        second += me.against(opponent) + me.points;
    }

    console.log('second', second);
}