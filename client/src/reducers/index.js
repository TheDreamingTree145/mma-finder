import { combineReducers } from 'redux';
import fightersReducer from './fightersReducer';

const rootReducer = combineReducers({
  fighters: fightersReducer
})

export default rootReducer;
