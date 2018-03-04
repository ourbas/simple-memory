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
  faceUp: true,
  pairFounded: false,
};

const cardC: Card = {
  pos: 3,
  value: 'C',
  faceUp: true,
  pairFounded: true,
};

describe('Memory reducer', () => {
  describe('undefined action ', () => {
    it('should return the default state', () => {
      const { initialState } = fromMemory;
      const action = {} as any;
      const state = fromMemory.reducer(undefined, action);
      expect(state).toEqual(fromMemory.initialState);
    });
  });
  describe('INIT_GAME action ', () => {
    it('should setup board', () => {
      const { initialState } = fromMemory;
      const action = new fromMemory.InitGame();
      const state = fromMemory.reducer(initialState, action);

      expect(state.board.length).toBe(20);
      expect(state.initialized).toBe(true);
    });
  });
  describe('Memory Selectors', () => {
    it('selector should return 3', () => {
      const { initialState } = fromMemory;
      const action = new fromMemory.InitGame();
      const board = [cardA, cardB, cardC];

      const previousState = { ...initialState, board };
      const slice = fromMemory.getBoard(previousState);
      expect(slice.length).toBe(3);
    });
  });
});
