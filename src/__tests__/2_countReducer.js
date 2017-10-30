import count,
{
  addOne,
  addNumber,
  resetNumber,
  subtractNumber,
} from '../count';

xdescribe('count reducer', () => {
  it('returns an initial state when state is undefined', () => {
    const state = undefined;
    const action = { type: '@@redux/INIT' };
    const nextState = count(state, action);

    expect(nextState).toBe(0);
  });

  xit('returns the same state when receiving an unknown action', () => {
    const state = 1234;
    const action = { type: 'DO_NOTHING' };
    const nextState = count(state, action);

    expect(nextState).toBe(state);
  });

  xit('responds to the ADD_ONE action type', () => {
    const state = 2;
    const nextState = count(state, addOne());

    expect(nextState).toBe(3);
  });

  xit('responds to the ADD_NUMBER action type', () => {
    const state = 6;
    const nextState = count(state, addNumber(2));

    expect(nextState).toBe(8);
  });

  xit('responds to the RESET_NUMBER action type', () => {
    const state = 2;
    const nextState = count(state, resetNumber());

    expect(nextState).toBe(0);
  });

  xit('responds to the SUBTRACT_NUMBER action type', () => {
    const state = 3;
    const nextState = count(state, subtractNumber(2));

    expect(nextState).toBe(1);
  });
});
