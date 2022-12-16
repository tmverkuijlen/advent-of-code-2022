import Forest from "./forest";

type Direction = 'left'|'right'|'top'|'bottom';

export default class Tree {
    top?: Tree;
    bottom?: Tree;
    left?: Tree;
    right?: Tree;

    constructor(public id: string, public height: number, public forest: Forest) { }

    isVisible() {
        if (this.height > this.forest.getMaxHeightToTheLeft(this)) {
            return true;
        }

        if (this.height > this.forest.getMaxHeightToTheRight(this)) {
            return true;
        }

        if (this.height > this.forest.getMaxHeightToTheTop(this)) {
            return true;
        }

        if (this.height > this.forest.getMaxHeightToTheBottom(this)) {
            return true;
        }

        return false;
    }

    scenicScore() {
        const result = [];

        for (let direction of ['left', 'top', 'right', 'bottom']) {
            const score = this.scenicScoreDirection(direction as Direction, this);
            result.push(score);
        }

        return result.reduce((a, b) => a * b, 1);
    }

    scenicScoreDirection(direction: Direction, tree: Tree): number {
        let value = 0;

        if (tree !== this && tree.height > this.height) {
            value = 1;
        } else if (tree !== this) {
            return 1;
        }

        if (this[direction]) {
            return this[direction]!.scenicScoreDirection(direction, tree) + value;
        }
        
        return value;
    }

    protected isVisibleInDirection(direction: Direction, height?: number): boolean {
        if (height && height <= this.height) {
            return false;
        }

        // No neighbour so definitely visible
        if (!this[direction]) {
            return true;
        }

        return this[direction]!.isVisibleInDirection(direction, height || this.height);
    }

    getColumn() {
        return parseInt(this.id.split('-').pop() as string);
    }

    getRow() {
        return parseInt(this.id.split('-').shift() as string);
    }
}