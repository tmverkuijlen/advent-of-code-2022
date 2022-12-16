import Head from "./head";
import Movable from "./movable";
import { Direction } from "./types";

export default class Tail extends Movable {
    visited: any = {};

    constructor(public head: Head) {
        super();
    }

    decideMove() {
        const moves: Direction[] = [];

        const diffX = Math.abs(this.x - this.head.x);
        const diffY = Math.abs(this.y - this.head.y);

        if (diffX > 1) {
            moves.push(this.head.x < this.x ? 'L' : 'R');

            if (diffY === 1) {
                moves.push(this.head.y < this.y ? 'D' : 'U');
            }
        }

        if (diffY > 1) {
            moves.push(this.head.y < this.y ? 'D' : 'U');

            if (diffX === 1) {
                moves.push(this.head.x < this.x ? 'L' : 'R');
            }
        }

        return moves;
    }

    move() {
        const moves = this.decideMove();

        for (let move of moves) {
            super.move(move);
        }

        this.addVisit();
    }

    addVisit() {
        this.visited[`${this.x}-${this.y}`] ??= true;
    }
}