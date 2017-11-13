import { combineReducers } from 'redux';
import fightersReducer from './fightersReducer';
import gymsReducer from './gymsReducer';

const rootReducer = combineReducers({
  fighters: fightersReducer
  gyms: gymsReducer
})

export default rootReducer;
