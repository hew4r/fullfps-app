import { combineReducers } from 'redux';
import { games } from '../reducers/games'
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  games,
  form: reduxForm,
})