import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { reducer } from './memory.reducers';

import { Card } from '../models/card.model';
import * as fromMemory from '.';

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

describe('Memory selectors', () => {
  let store: Store<fromMemory.State>;
  const board = [cardA, cardB, cardC];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ reducer })],
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('Memory Selectors', () => {
    it('selector should return 3', () => {
      const previousState: fromMemory.MemoryState = {
        ...fromMemory.initialState,
        board: { 1: cardA, 2: cardB, 3: cardC },
      };
      const slice = fromMemory.getAllCards({ memory: previousState });
      expect(Object.keys(slice).length).toBe(3);
    });
  });
});
