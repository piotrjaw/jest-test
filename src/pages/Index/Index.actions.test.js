import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './Index.actions';
import * as TYPES from './Index.types';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const host = 'http://localhost:5000';

axios.defaults.adapter = httpAdapter;
axios.defaults.host = host;

let action;
let store;

beforeEach(() => {
  store = mockStore({ todos: [] });
  expect.assertions(2);
});

afterEach(() => {
  expect(action).toMatchSnapshot();
  nock.cleanAll();
});

describe('Index actions', () => {
  it('should create an action to create a todo', () => {
  });

  it('should reject on lack of text', () => {
  });

  it('should create an action to get all the todos', () => {
  });

  it('should create an action to udpate a todo', () => {
  });

  it('should create an action to delete a todo', () => {
  });

  it('should create a getTodosSuccess action', () => {
  });
});
