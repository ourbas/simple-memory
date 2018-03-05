export interface Card {
  pos: number;
  value: string;
  faceUp: boolean;
  pairFounded: boolean;
}

export interface Board {
  [key: number]: Card;
}
