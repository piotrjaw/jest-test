import reducer from './Index.reducer';
import * as TYPES from './Index.types';

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
