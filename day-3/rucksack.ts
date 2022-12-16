export default class Rucksack {
    firstCompartment: string;
    secondCompartment: string;

    constructor(content: string) {
        const half = content.length / 2;
        this.firstCompartment = content.substring(0, half);
        this.secondCompartment = content.substring(half);
    }

    itemsInBothCompartments() {
        for (let item of this.secondCompartment.split('')) {
            if (this.firstCompartment.includes(item)) {
                return item;
            }
        }

        return '';
    }
}