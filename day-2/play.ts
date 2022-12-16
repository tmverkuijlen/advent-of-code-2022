export interface Play {
    points: number;

    against(play: Play): number;

    opponent(result: 'X'|'Y'|'Z'): Play;
}