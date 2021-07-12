import { Board, Deck } from "./defs";

let d = new Deck();
d.shuffle();
d.pop(40);
d.show();
