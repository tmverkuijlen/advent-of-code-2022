import { Direction } from "./types";

export default class Movable {
    x: number = 0;
    y: number = 0;

    move(direction: Direction) {
        switch(direction) {
            case 'L':
                this.x--;
                break;
            case 'R':
                this.x++;
                break;
            case 'U':
                this.y++;
                break;
            case 'D':
                this.y--;
        }
    }
}