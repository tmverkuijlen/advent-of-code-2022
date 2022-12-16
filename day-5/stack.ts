export default class Stack {
  crates: string[] = [];

  constructor() {}

  top() {
    return this.crates[this.crates.length - 1];
  }

  move(stack: Stack, amount = 1) {
    const cratesToMove: string[] = [];

    for (let i = 0; i < amount; i++) {
        const crate = this.crates.pop();

        if (!crate) {
            return;
        }

        cratesToMove.push(crate);
    }

    for (let crate of cratesToMove.reverse()) {
        stack.add(crate);
    }
  }

  add(crate: string) {
    this.crates.push(crate);
  }
}
