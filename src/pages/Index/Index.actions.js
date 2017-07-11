import * as TYPES from './Index.types';
import { del, get, put, post } from '../../helpers/request';

const createTodoPending = () => ({
  type: TYPES.CREATE_TODO_PENDING
});

const createTodoSuccess = () => ({
  type: TYPES.CREATE_TODO_SUCCESS
});

const deleteTodoPending = () => ({
  type: TYPES.DELETE_TODO_PENDING
});

const deleteTodoSuccess = () => ({
  type: TYPES.DELETE_TODO_SUCCESS
});

const getTodosPending = () => ({
  type: TYPES.GET_TODOS_PENDING
});

export const getTodosSuccess = (data) => ({
  type: TYPES.GET_TODOS_SUCCESS,
  data
});

const updateTodoPending = () => ({
  type: TYPES.UPDATE_TODO_PENDING
});

const updateTodoSuccess = () => ({
  type: TYPES.UPDATE_TODO_SUCCESS
});

export const createTodo = (createObj) => (dispatch) => {
  if (!createObj.text) return Promise.reject();
  dispatch(createTodoPending());
  return post('/todos/', createObj)
    .then((res) => dispatch(createTodoSuccess()));
}

export const deleteTodo = (deleteObj) => (dispatch) => {
  dispatch(deleteTodoPending());
  return del('/todos/', deleteObj)
    .then((res) => dispatch(deleteTodoSuccess()));
};

export const getTodos = () => (dispatch) => {
  dispatch(getTodosPending());
  return get('/todos/')
    .then(({ data }) => dispatch(getTodosSuccess(data)));
};

export const updateTodo = (updateObj) => (dispatch) => {
  dispatch(updateTodoPending());
  return put('/todos/', updateObj)
    .then((res) => dispatch(updateTodoSuccess()));
};
