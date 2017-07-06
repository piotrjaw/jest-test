import { combineReducers } from 'redux';
import index from './pages/Index/Index.reducer';
import toDo from './pages/ToDo/ToDo.reducer';

const rootReducer = combineReducers({
  index,
  toDo
});

export default rootReducer;
