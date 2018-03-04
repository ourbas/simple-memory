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
  let store: Store<fromMemory.MemoryState>;
  const board = [cardA, cardB, cardC];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ reducer })],
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  // TODO
  describe('getBoard selector', () => {});
});
