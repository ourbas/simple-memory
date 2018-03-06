import * as fromMemory from './index';
import { InitGame } from './index';
import { Card } from '../models/card.model';

describe('Memory reducer', () => {
  describe('undefined action ', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = fromMemory.reducer(undefined, action);
      expect(state).toEqual(fromMemory.initialState);
    });
  });
  describe('INIT_GAME action ', () => {
    it('should setup board', () => {
      const action = new fromMemory.InitGame();
      const state = fromMemory.reducer(
        {
          board: {},
          revealedCards: [],
          initialized: true,
        },
        action
      );

      expect(Object.keys(state.board).length).toBe(20);
      expect(state.initialized).toBe(true);
    });
  });
  describe('REVEAL_CARD action ', () => {
    const action = new fromMemory.RevealCard(1);

    const state = fromMemory.reducer(
      {
        board: {
          1: { pos: 1, value: 'A', faceUp: false, pairFounded: false },
          2: { pos: 2, value: 'B', faceUp: false, pairFounded: false },
          3: { pos: 3, value: 'C', faceUp: false, pairFounded: false },
        },
        revealedCards: [],
        initialized: true,
      },
      action
    );
    it('should turn card 1 faceup', () => {
      expect(state.board[1].faceUp).toBeTruthy();
    });
    it('should push card as revealed', () => {
      expect(state.revealedCards).toContain(1);
    });
  });

  describe('REVEAL_PAIR action ', () => {
    const action = new fromMemory.RevealPair([2, 3]);
    const state = fromMemory.reducer(
      {
        board: {
          1: { pos: 1, value: 'A', faceUp: true, pairFounded: false },
          2: { pos: 2, value: 'B', faceUp: true, pairFounded: false },
          3: { pos: 3, value: 'C', faceUp: true, pairFounded: false },
        },
        revealedCards: [2, 3],
        initialized: true,
      },
      action
    );
    it('should set card 2 as founded', () => {
      expect(state.board[2].pairFounded).toBeTruthy();
    });
    it('should clean revealedCards', () => {
      expect(state.revealedCards.length).toBe(0);
    });
  });

  describe('RESET_CARDS action ', () => {
    const action = new fromMemory.ResetCards([1, 3]);
    const state = fromMemory.reducer(
      {
        board: {
          1: { pos: 1, value: 'A', faceUp: false, pairFounded: true },
          2: { pos: 2, value: 'B', faceUp: false, pairFounded: true },
          3: { pos: 3, value: 'C', faceUp: false, pairFounded: true },
        },
        revealedCards: [1, 3],
        initialized: true,
      },
      action
    );
    it('should turn card 3 facedown', () => {
      expect(state.board[3].faceUp).toBeFalsy();
    });
    it('should clean revealedCards', () => {
      expect(state.revealedCards.length).toBe(0);
    });
  });
});
