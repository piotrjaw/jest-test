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
    expect(reducer(undefined, {})).toEqual({
      todos: []
    });

    expect(reducer(initialState, {})).toEqual({
      todos: []
    });
  });

  it('should handle CREATE_TODO', () => {
    expect(reducer(initialState, {
      type: TYPES.CREATE_TODO
    })).toEqual({
      todos: []
    });

    expect(reducer({
      todos: [{ id: 1, text: 'test1' }]
    }, {
      type: TYPES.CREATE_TODO
    })).toEqual({
      todos: [{ id: 1, text: 'test1' }]
    });
  });

  it('should handle GET_TODOS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: TYPES.GET_TODOS_SUCCESS,
      data: [
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' }
      ]
    })).toEqual({
      todos: [
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' }
      ]
    });
  });
});
