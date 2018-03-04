import { createSelector } from '@ngrx/store';

import { Card } from '../models/card.model';
import * as fromReducers from './memory.reducers';

export const getMemoryState = createSelector(
  fromReducers.getState,
  (state: fromReducers.State) => state.memory
);

export const getMemoryBoard = createSelector(
  getMemoryState,
  fromReducers.getBoard
);
export const getMemoryRevealedCards = createSelector(
  getMemoryState,
  fromReducers.getRevealedCards
);
export const getMemoryInitialized = createSelector(
  getMemoryState,
  fromReducers.getInitialized
);
