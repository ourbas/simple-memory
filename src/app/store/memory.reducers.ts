import * as fromMemory from './memory.actions';
import { Card } from '../models/card.model';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  memory: MemoryState;
}

export const getState = (state: State) => state;

export const reducers: ActionReducerMap<State> = {
  memory: reducer,
};

// TODO: featurize?
export interface MemoryState {
  board: Card[];
  revealedCards: number[];
  initialized: boolean;
}

export const initialState: MemoryState = {
  board: [],
  revealedCards: [],
  initialized: false,
};

export function reducer(
  state = initialState,
  action: fromMemory.MemoryAction
): MemoryState {
  switch (action.type) {
    case fromMemory.INIT_GAME: {
      const res = {
        ...state,
        board: setupBoard(),
        initialized: true,
      };
      return res;
    }
  }
  return { ...state };
}
export const getBoard = (state: MemoryState) => state.board;
export const getRevealedCards = (state: MemoryState) => state.revealedCards;
export const getInitialized = (state: MemoryState) => state.initialized;

const cardPool = 'AABBCCDDEEFFGGHHIIJJ'.split('');

// TODO: Move to a Effect?
function setupBoard(): Card[] {
  const randValues = shuffleArray(cardPool);
  const res: Card[] = [];
  for (let pos = 1; pos <= 20; pos++) {
    res.push({
      pos: pos,
      value: randValues.pop(),
      faceUp: false,
      pairFounded: false,
    });
  }
  return res;
}

function shuffleArray(input: string[]): string[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
