import { Result } from "./enums";
import Paper from "./paper";
import { Play } from "./play";
import Rock from "./rock";

export default class Scissors implements Play {
    points = 3;

    against(play: Play) {
        if (play instanceof Paper) {
            return 6;
        }

        if (play instanceof Scissors) {
            return 3;
        }

        return 0;
    }

    opponent(result: "X" | "Y" | "Z"): Play {
        if (result === Result.win) {
            return new Rock();
        }

        if (result === Result.draw) {
            return new Scissors();
        }

        return new Paper();
    }
}