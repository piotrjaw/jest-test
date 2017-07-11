import * as TYPES from './Index.types';

const initialState = { todos: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_TODOS_SUCCESS:
      return {
        todos: action.data
      }
    default:
      return {
        todos: state.todos || []
      };
  }
};
