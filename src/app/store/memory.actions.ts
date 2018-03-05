import { Action } from '@ngrx/store';

import { Card } from '../models/card.model';

export const INIT_GAME = 'Initialize Memory Game';
export class InitGame implements Action {
  readonly type = INIT_GAME;
}

export const REVEAL_CARD = 'Reveal a Card';
export class RevealCard implements Action {
  readonly type = REVEAL_CARD;
  constructor(public payload: number) {}
}

export const RESET_CARDS = 'Reset unmatched Cards face down';
export class ResetCards implements Action {
  readonly type = RESET_CARDS;
  constructor() {}
}

// action types
export type MemoryAction = InitGame | RevealCard | ResetCards;
