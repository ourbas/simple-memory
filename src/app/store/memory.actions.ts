import { Action } from '@ngrx/store';

import { Card } from '../models/card.model';

export const INIT_GAME = 'Initialize Memory Game';
export class InitGame implements Action {
  readonly type = INIT_GAME;
}

export const REVEAL_CARD = 'Reveal a Card faceUp';
export class RevealCard implements Action {
  readonly type = REVEAL_CARD;
  constructor(public payload: number) {}
}

export const REVEAL_PAIR = 'Reveal a matching pair of Cards face up';
export class RevealPair implements Action {
  readonly type = REVEAL_PAIR;
  constructor(public payload: number[]) {}
}

export const RESET_PAIR = 'Reset unmatched pair of Cards face down';
export class ResetCards implements Action {
  readonly type = RESET_PAIR;
  constructor(public payload: number[]) {}
}

// action types
export type MemoryAction = InitGame | RevealCard | RevealPair | ResetCards;
