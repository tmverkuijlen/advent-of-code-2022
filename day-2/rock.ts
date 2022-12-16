import { Result } from "./enums";
import Paper from "./paper";
import { Play } from "./play";
import Scissors from "./scissors";

export default class Rock implements Play {
    points = 1;

    against(play: Play) {
        if (play instanceof Scissors) {
            return 6;
        }

        if (play instanceof Rock) {
            return 3;
        }

        return 0;
    }

    opponent(result: "X" | "Y" | "Z"): Play {
        if (result === Result.win) {
            return new Paper();
        }

        if (result === Result.draw) {
            return new Rock();
        }

        return new Scissors();
    }
}