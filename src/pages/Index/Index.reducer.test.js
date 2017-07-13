import reducer from './Index.reducer';
import * as TYPES from './Index.types';

let initialState;
let result;

beforeEach(() => {
  initialState = {};
});

afterEach(() => {
  expect(result).toMatchSnapshot();
  result = null;
});

describe('Index reducer', () => {
  it('should return the initial state', () => {
    result = reducer(undefined, {});
    expect(result).toEqual({
      todos: []
    });
    expect(result).toMatchSnapshot();

    result = reducer(initialState, {});
    expect(result).toEqual({
      todos: []
    });
  });

  it('should handle CREATE_TODO', () => {
    result = reducer(initialState, {
      type: TYPES.CREATE_TODO
    });
    expect(result).toEqual({
      todos: []
    });
    expect(result).toMatchSnapshot();

    result = reducer({
      todos: [{ id: 1, text: 'test1' }]
    }, {
      type: TYPES.CREATE_TODO
    });
    expect(result).toEqual({
      todos: [{ id: 1, text: 'test1' }]
    });
  });

  it('should handle GET_TODOS_SUCCESS', () => {
    result = reducer(initialState, {
      type: TYPES.GET_TODOS_SUCCESS,
      data: [
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' }
      ]
    });
    expect(result).toEqual({
      todos: [
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' }
      ]
    });
  });
});
