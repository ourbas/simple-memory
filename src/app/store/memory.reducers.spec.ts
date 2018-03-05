import * as fromMemory from './index';
import { InitGame } from './index';
import { Card } from '../models/card.model';

const cardA: Card = {
  pos: 1,
  value: 'A',
  faceUp: false,
  pairFounded: false,
};

const cardB: Card = {
  pos: 2,
  value: 'B',
  faceUp: false,
  pairFounded: false,
};

const cardC: Card = {
  pos: 3,
  value: 'C',
  faceUp: true,
  pairFounded: true,
};

const previousState: fromMemory.MemoryState = {
  board: { 1: cardA, 2: cardB, 3: cardC },
  revealedCards: [],
  initialized: true,
};

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
      const state = fromMemory.reducer(previousState, action);

      expect(Object.keys(state.board).length).toBe(20);
      expect(state.initialized).toBe(true);
    });
  });
  describe('REVEAL_CARD action ', () => {
    const action = new fromMemory.RevealCard(1);
    const state = fromMemory.reducer(previousState, action);
    it('should turn card 1 faceup', () => {
      expect(state.board[1].faceUp).toBeTruthy();
    });
    it('should push card as revealed', () => {
      expect(state.revealedCards).toContain(1);
    });
  });

  describe('RESET_CARDS action ', () => {
    const action = new fromMemory.ResetCards();
    const state = fromMemory.reducer(
      { ...previousState, revealedCards: [1, 3] },
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
