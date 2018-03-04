import * as fromMemory from './memory.actions';

describe('Memory actions', () => {
  describe('Init Memory Game', () => {
    it('shoud create an action', () => {
      const action = new fromMemory.InitGame();
      expect({ ...action }).toEqual({
        type: fromMemory.INIT_GAME,
      });
    });
  });
});
