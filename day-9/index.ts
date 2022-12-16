import FileConverter from "../utils/FileConverter"
import LargeRope from "./largeRope";
import Rope from "./rope";
import { Direction } from "./types";

export const run = async () => {
    const content = await FileConverter.readAndConvertCsvToRows('./inputs/input-9.txt');

    const rope = new Rope();
    const large = new LargeRope();

    // console.log('------- START ------')
    // console.log('');

    // rope.print();

    for (let row of content) {
        const [direction, amount] = row.split(' ');

        rope.move(direction as Direction, parseInt(amount));
        large.move(direction as Direction, parseInt(amount));
        // rope.print();
    }

    console.log('first', Object.keys(rope.tail.visited).length);
    console.log('second', Object.keys(large.tail.visited).length);
}