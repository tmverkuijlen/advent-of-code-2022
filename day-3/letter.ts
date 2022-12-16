export default class Letter {
    constructor(public letter: string) {

    }

    priority() {
        const priority = this.letter.toLowerCase().charCodeAt(0) - 96;

        return this.letter === this.letter.toUpperCase() ? 26 + priority : priority;
    }
}