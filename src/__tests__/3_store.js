import count,
{
  addOne,
  addNumber,
  resetNumber,
  subtractNumber,
} from '../count';
import { createStore } from 'redux';

xdescribe('store with count reducer', () => {
  it('should pass after completing the TODO comments', () => {
    // TODO: create a store
    const store = undefined;
    expect(store).toBeInstanceOf(Object);

    let action;

    // TODO: Create action using the correct action creator
    action = {};
    store.dispatch(action);
    expect(store.getState()).toBe(1);

    // TODO: Create action using the correct action creator
    action = {};
    store.dispatch(action);
    expect(store.getState()).toBe(5);

    // TODO: Create action using the correct action creator
    action = {};
    store.dispatch(action);
    expect(store.getState()).toBe(-1);

    // TODO: Create action using the correct action creator
    action = {};
    store.dispatch(action);
    expect(store.getState()).toBe(0);
  });
});
