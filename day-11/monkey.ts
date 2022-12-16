export default class Monkey {
    inspect = 0;

    constructor(
        public monkeys: Monkey[],
        public items: number[],
        public operation: string,
        public divisibleBy: number,
        public ifTrue: number,
        public ifFalse: number
    ) { }

    emulate() {
        let old = this.items.shift();

        while (old) {
            const value = eval(this.operation);

            this.monkeys[value % this.divisibleBy === 0 ? this.ifTrue : this.ifFalse].passItem(value);

            this.inspect++;
            old = this.items.shift();
        }
    }

    passItem(item: number) {
        this.items.push(item);
    }
}