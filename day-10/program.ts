export default class Program {
    cycle = 0;
    signalStrengths: number[] = [];
    displayRow: string[] = [];

    x = 1;

    run(actions: string[]) {
        for (let row of actions) {
            const [action, param] = row.split(' ');

            if (action === 'addx') {
                this.addx(parseInt(param));
            } else {
                this.noop();
            }
        }
    }

    addx(number: number) {
        this.incrementCycle();
        this.incrementCycle();
        this.x += number;
    }

    noop() {
        this.incrementCycle();
    }

    incrementCycle() {
        const remainingCicle = this.cycle % 40;
        this.displayRow.push(remainingCicle >= this.x -1 && remainingCicle <= this.x + 1 ? '#' : '.');

        this.cycle++;

        if (this.cycle % 40 === 20) {
            this.signalStrengths.push(this.cycle * this.x);
        }

        if (this.cycle % 40 === 0) {
            this.draw();
        }
    }

    signalStrength() {
        return this.signalStrengths.reduce((a, b) => a + b, 0);
    }

    draw() {
        console.log(this.displayRow.join(''));

        this.displayRow = [];
    }
}