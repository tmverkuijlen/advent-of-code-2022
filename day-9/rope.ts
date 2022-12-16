import Head from "./head";
import Tail from "./tail";
import { Direction } from "./types";

export default class Rope {
    head: Head;
    tail: Tail;

    constructor() {
        this.head = new Head();
        this.tail = new Tail(this.head);
    }

    move(direction: Direction, times = 1) {
        for (let i = 0; i < times; i++) {
            this.head.move(direction);
            this.tail.move();
        }
    }

    print() {
        console.log('head, x: ', this.head.x, ' y: ', this.head.y);
        console.log('tail, x: ', this.tail.x, ' y: ', this.tail.y);
        console.log('');

        for (let row = 4; row >= 0; row--) {
            const consoleRow: string[] = [];
            for (let col = 0; col < 5; col++) {
                if (this.head.x === col && this.head.y === row) {
                    consoleRow.push('H');
                } else if (this.tail.x === col && this.tail.y === row) {
                    consoleRow.push('T');
                } else {
                    consoleRow.push('.');
                }
            }

            console.log(consoleRow.join(' '));
        }

        console.log('');
        console.log('------- END ------');
        console.log('');
    }
}