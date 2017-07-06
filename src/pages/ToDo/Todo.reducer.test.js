import reducer from './ToDo.reducer';
import * as TYPES from './ToDo.types';

let initialState;
let result;

beforeEach(() => {
  initialState = {
  };
});

afterEach(() => {
  expect(result).toMatchSnapshot();
  result = null;
});
