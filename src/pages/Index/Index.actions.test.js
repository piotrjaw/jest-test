import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './Index.actions';
import * as TYPES from './Index.types';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const host = 'http://localhost:5000';

axios.defaults.adapter = httpAdapter;
axios.defaults.host = host;

let testActions;
let store;

beforeEach(() => {
  store = mockStore({ todos: [] });
  expect.assertions(2);
});

afterEach(() => {
  expect(testActions).toMatchSnapshot();
  nock.cleanAll();
});

describe('Index actions', () => {
  it('should create an action to create a todo', () => {
    const createObj = {
      text: 'test'
    };

    nock(host)
      .post('/todos/', createObj)
      .reply(200);

    const expectedActions = [
      { type: TYPES.CREATE_TODO_PENDING },
      { type: TYPES.CREATE_TODO_SUCCESS }
    ];

    testActions = store.getActions();

    return store
      .dispatch(actions.createTodo(createObj))
      .then(() => expect(testActions).toEqual(expectedActions));
  });

  it('should reject on lack of text', () => {
    const createObj = {
      text: undefined
    };

    testActions = null;

    nock(host)
      .post('/todos/', createObj)
      .reply(200);

    return expect(store.dispatch(actions.createTodo(createObj))).rejects.toBeUndefined();
  });

  it('should create an action to get all the todos', () => {
    nock(host)
      .get('/todos/')
      .reply(200, [
        {
          id: '1',
          text: '1',
          checked: false
        },
        {
          id: '2',
          text: '2',
          checked: true
        }
      ]);
    const expectedActions = [
      { type: TYPES.GET_TODOS_PENDING },
      { type: TYPES.GET_TODOS_SUCCESS, data: [
        {
          id: '1',
          text: '1',
          checked: false
        },
        {
          id: '2',
          text: '2',
          checked: true
        }
      ] }
    ];

    testActions = store.getActions();

    return store
      .dispatch(actions.getTodos())
      .then(() => expect(testActions).toEqual(expectedActions));
  });

  it('should create an action to udpate a todo', () => {
    const updateObj = {
      id: 1,
      text: 'test',
      checked: true
    };

    nock(host)
      .put('/todos/', updateObj)
      .reply(200);

    const expectedActions = [
      { type: TYPES.UPDATE_TODO_PENDING },
      { type: TYPES.UPDATE_TODO_SUCCESS }
    ];

    testActions = store.getActions();

    return store
      .dispatch(actions.updateTodo(updateObj))
      .then(() => expect(testActions).toEqual(expectedActions));
  });

  it('should create an action to delete a todo', () => {
    const deleteObj = { _id: 1 };
    nock(host)
      .delete('/todos/')
      .query(deleteObj)
      .reply(200);

    const expectedActions = [
      { type: TYPES.DELETE_TODO_PENDING },
      { type: TYPES.DELETE_TODO_SUCCESS }
    ];

    testActions = store.getActions();

    return store.dispatch(actions.deleteTodo(deleteObj))
      .then(() => {
        expect(testActions).toEqual(expectedActions);
      });
  });

  it('should create a getTodosSuccess action', () => {
    const data = [{ text: '1', id: '1' }, { text: '2', id: '2' }];
    const expectedAction = {
      type: TYPES.GET_TODOS_SUCCESS,
      data
    };

    testActions = actions.getTodosSuccess(data);

    expect(testActions).toEqual(expectedAction);
  });
});
