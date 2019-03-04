import { createAction } from 'redux-actions';
import {UPDATE_GAMES} from "../constants";
import {apiPut} from "../api";
import {urlGames} from "../api/urls";

export const updateGames = createAction(UPDATE_GAMES,
    (id, game) => apiPut(urlGames, id, game)()
);