import { createSelector } from '@ngrx/store';

import { Card } from '../models/card.model';
import * as fromReducers from './memory.reducers';

export const getMemoryState = createSelector(
  fromReducers.getState,
  (state: fromReducers.State) => state.memory
);
export const getMemoryInitialized = createSelector(
  getMemoryState,
  fromReducers.getInitialized
);

export const getMemoryBoard = createSelector(
  getMemoryState,
  fromReducers.getBoard
);

export const getAllCards = createSelector(getMemoryBoard, board =>
  Object.keys(board).map(pos => board[parseInt(pos, 10)])
);

export const getMemoryRevealedCards = createSelector(
  getMemoryState,
  fromReducers.getRevealedCards
);

export const getRevealedCardsDetails = createSelector(
  getMemoryState,
  getMemoryRevealedCards,
  (state, cards) => {
    return cards.map(pos => state.board[pos]);
  }
);
