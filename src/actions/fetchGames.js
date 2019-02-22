import {FETCH_GAMES} from "../constants";
import { createAction } from 'redux-actions';
import { apiGet } from "../api";
import { urlGames } from "../api/urls";

export const fetchGames = createAction(FETCH_GAMES, apiGet(urlGames));

/* WHITOUT REDUX-ACTIONS
export const fetchGames = () => {
    return { type: FETCH_GAMES, payload:null }
};*/