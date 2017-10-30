import {
  addOne,
  addNumber,
  resetNumber,
  subtractNumber,
} from '../count';

describe('count actionCreators', () => {
  describe('addOne', () => {
    it('returns an ADD_ONE action type', () => {
      const action = addOne();
      expect(action.type).toBe('ADD_ONE');
    });
  });

  describe('addNumber', () => {
    xit('returns an ADD_NUMBER action type with a payload', () => {
      const number = 1324
      const action = addNumber(number);

      expect(action.type).toBe('ADD_NUMBER');
      expect(action.payload).toBe(number);
    });
  });

  describe('resetNumber', () => {
    xit('returns a RESET_NUMBER action type', () => {
      const action = resetNumber();

      expect(action.type).toBe('RESET_NUMBER');
    });
  });

  describe('subtractNumber', () => {
    xit('returns a SUBTRACT_NUMBER action type', () => {
      const number = 3;
      const action = subtractNumber(number);

      expect(action.type).toBe('SUBTRACT_NUMBER');
      expect(action.payload).toBe(number);
    });
  });
});
