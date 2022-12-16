import Tree from "./tree";

export default class Forest {
    trees: { [x: string]: Tree } = {};
    rows = 0;
    cols = 0;

    fill(content: string[]) {
        // add each tree
        this.rows = content.length;
        for (let row = 0; row < content.length; row++) {
            const rowOfTrees = content[row].split('');
    
            this.cols = rowOfTrees.length;
            for (let col = 0; col < rowOfTrees.length; col++) {
                const id = `${row}-${col}`;
                this.trees[id] = new Tree(id, parseInt(rowOfTrees[col]), this);
            }
        }

        // set neighbours
        for (let row = 0; row < content.length; row++) {
            const rowOfTrees = content[row].split('');
    
            for (let col = 0; col < rowOfTrees.length; col++) {
                const currentTree = this.trees[`${row}-${col}`];

                currentTree.left = this.trees[`${row}-${col - 1}`];
                currentTree.right = this.trees[`${row}-${col + 1}`];
                currentTree.top = this.trees[`${row - 1}-${col}`];
                currentTree.bottom = this.trees[`${row + 1}-${col}`];
            }
        }
    }

    getMaxHeightToTheLeft(tree: Tree) {
        return Math.max(...this.getAllTreesInRow(tree, 0, tree.getColumn()).map(t => t.height));
    }

    getMaxHeightToTheRight(tree: Tree) {
        return Math.max(...this.getAllTreesInRow(tree, tree.getColumn() + 1, this.cols).map(t => t.height));
    }

    getMaxHeightToTheTop(tree: Tree) {
        return Math.max(...this.getAllTreesInColumn(tree, 0, tree.getRow()).map(t => t.height));
    }

    getMaxHeightToTheBottom(tree: Tree) {
        return Math.max(...this.getAllTreesInColumn(tree, tree.getRow() + 1, this.rows).map(t => t.height));
    }

    private getAllTreesInColumn(tree: Tree, min: number, max: number) {
        const trees = [];

        for (let row = min; row < max; row++) {
            trees.push(this.trees[`${row}-${tree.getColumn()}`])
        }

        return trees;
    }

    private getAllTreesInRow(tree: Tree, min: number, max: number) {
        const trees = [];

        for (let col = min; col < max; col++) {
            trees.push(this.trees[`${tree.getRow()}-${col}`])
        }

        return trees;
    }
}