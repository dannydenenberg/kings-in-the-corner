interface Card {
  suit: string;
  value: string;
}

export class Deck {
  values = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
  suits = "D,H,S,C".split(",");

  cards: Card[] = [];

  constructor() {
    // return fresh deck
    for (let s of this.suits) {
      for (let v of this.values) {
        this.cards.push({ suit: s, value: v });
      }
    }
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffle() {
    for (let i = 0; i < 52; i++) {
      let rndNo = this.getRandomInt(0, 51);

      // swap
      [this.cards[i], this.cards[rndNo]] = [this.cards[rndNo], this.cards[i]];
    }
  }

  show() {
    let res = "";
    for (let c of this.cards) {
      res += `${c.value}${c.suit},`;
    }

    console.log(res);
    console.log(`TOTAL: ${this.cards.length}`);
  }

  pop(n: number): Card[] {
    let res = [];
    for (let i = 0; i < n; i++) {
      res.push(this.cards.pop()!);
    }
    return res;
  }
}

export class Board {
  // TODO:
  b = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
}

export class Game {}

/**

The board is this: 
[
[_, _, _],
[_, _, _],
[_, _, _]
]

 */
