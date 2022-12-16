export default class Section {
    min: number;
    max: number;

    constructor(pattern: string) {
        const [min, max] = pattern.split('-');

        this.min = parseInt(min);
        this.max = parseInt(max);
    }

    fullyContains(section: Section) {
        if (section.min >= this.min && section.max <= this.max) {
            return true;
        }

        // reverse
        if (this.min >= section.min && this.max <= section.max) {
            return true;
        }

        return false;
    }

    overlaps(section: Section) {
        if ((this.min >= section.min && this.min <= section.max) || (this.max >= section.min && this.max <= section.max)) {
            return true;
        }

        // reverse
        if ((section.min >= this.min && section.min <= this.max) || (section.max >= this.min && section.max <= this.max)) {
            return true;
        }

        return false;
    }
}