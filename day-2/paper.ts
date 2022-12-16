import { Result } from "./enums";
import { Play } from "./play";
import Rock from "./rock";
import Scissors from "./scissors";

export default class Paper implements Play {
    points = 2;

    against(play: Play) {
        if (play instanceof Rock) {
            return 6;
        }
        
        if (play instanceof Paper) {
            return 3;
        }

        return 0;
    }

    opponent(result: "X" | "Y" | "Z"): Play {
        if (result === Result.win) {
            return new Scissors();
        }

        if (result === Result.draw) {
            return new Paper();
        }

        return new Rock();
    }
}