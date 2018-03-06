import * as fromActions from './memory.actions';
import { Card, Board } from '../models/card.model';
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
  board: Board;
  revealedCards: number[];
  initialized: boolean;
}

export const initialState: MemoryState = {
  board: {},
  revealedCards: [],
  initialized: false,
};

export function reducer(
  state = initialState,
  action: fromActions.MemoryAction
): MemoryState {
  switch (action.type) {
    case fromActions.INIT_GAME: {
      const res = {
        ...state,
        board: setupBoard(),
        initialized: true,
      };
      return res;
    }

    case fromActions.REVEAL_CARD: {
      const pos = action.payload;
      // Check that card isn't faceup already
      if (state.board[pos].faceUp) {
        break;
      }
      const board = {
        ...state.board,
        [pos]: {
          ...state.board[pos],
          faceUp: true,
        },
      };
      return {
        ...state,
        board,
        revealedCards: [...state.revealedCards, pos],
      };
    }

    case fromActions.REVEAL_PAIR: {
      const pair = action.payload;
      const board = {
        ...state.board,
        [pair[0]]: {
          ...state.board[pair[0]],
          pairFounded: true,
        },
        [pair[1]]: {
          ...state.board[pair[1]],
          pairFounded: true,
        },
      };

      return {
        ...state,
        board,
        revealedCards: [],
      };
    }

    case fromActions.RESET_PAIR: {
      const pair = action.payload;
      const board = {
        ...state.board,
        [pair[0]]: {
          ...state.board[pair[0]],
          faceUp: false,
        },
        [pair[1]]: {
          ...state.board[pair[1]],
          faceUp: false,
        },
      };

      return {
        ...state,
        board,
        revealedCards: [],
      };
    }
  }

  return { ...state };
}
export const getBoard = (state: MemoryState) => state.board;
export const getRevealedCards = (state: MemoryState) => state.revealedCards;
export const getInitialized = (state: MemoryState) => state.initialized;

const cardPool = 'AABBCCDDEEFFGGHHIIJJ'.split('');

// TODO: Move to a Effect?
function setupBoard(): Board {
  return shuffleArray(cardPool).reduce((acc: Board, value, index) => {
    return {
      ...acc,
      [index]: {
        pos: index,
        value: value,
        faceUp: false,
        pairFounded: false,
      },
    };
  }, {});
}

function shuffleArray(input: string[]): string[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
