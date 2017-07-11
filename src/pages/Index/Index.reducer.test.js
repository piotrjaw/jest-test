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
  });

  it('should handle CREATE_TODO', () => {
  });

  it('should handle GET_TODOS_SUCCESS', () => {
  });
});
