import { createSelector } from 'reselect';

export const getGames = state => state.games;

export const getGameBySku = createSelector(
    (state, props) => state.games.find( g => g.sku === props.sku),
    game => game
);