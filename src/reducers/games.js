import { handleActions } from 'redux-actions';
import {FETCH_GAMES, UPDATE_GAMES} from "../constants";

export const games = handleActions({
    [FETCH_GAMES]: (state, action) => [...action.payload],

  
  
}, []);