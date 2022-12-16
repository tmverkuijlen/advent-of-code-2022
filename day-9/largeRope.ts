import Head from "./head";
import Rope from "./rope";
import Tail from "./tail";
import { Direction } from "./types";

export default class LargeRope extends Rope {

    knot1: Tail;
    knot2: Tail;
    knot3: Tail;
    knot4: Tail;
    knot5: Tail;
    knot6: Tail;
    knot7: Tail;
    knot8: Tail;

    constructor() {
        super();

        this.knot1 = new Tail(this.head);
        this.knot2 = new Tail(this.knot1);
        this.knot3 = new Tail(this.knot2);
        this.knot4 = new Tail(this.knot3);
        this.knot5 = new Tail(this.knot4);
        this.knot6 = new Tail(this.knot5);
        this.knot7 = new Tail(this.knot6);
        this.knot8 = new Tail(this.knot7);
        this.tail = new Tail(this.knot8);
    }

    move(direction: Direction, times = 1) {
        for (let i = 0; i < times; i++) {
            this.head.move(direction);
            this.knot1.move();
            this.knot2.move();
            this.knot3.move();
            this.knot4.move();
            this.knot5.move();
            this.knot6.move();
            this.knot7.move();
            this.knot8.move();
            this.tail.move();
        }
    }
}