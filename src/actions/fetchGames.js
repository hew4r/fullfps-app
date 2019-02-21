import {FETCH_GAMES} from "../constants";
import { createAction } from 'redux-actions';

const games = [
    {
        "sku": "6259290",
        "title": "Anthem",
        "img": "https://www.gamestop.com/common/images/lbox/172910b.jpg",
        "publisher": "EA",
        "releaseDate": "22/02/2019",
        "developer": "BioWare",
        "platform":	"PlayStation 4",
        "genre": "Role Playing",
        "edition": "Standard Edition",
        "softwareFormat": "Physical",
        "multiplayer": "Yes"
    },
    {
        "sku": "6216393",
        "title": "Pokémon",
        "img": "https://www.gamestop.com/common/images/lbox/168862b.jpg",
        "publisher": "Nintendo",
        "releaseDate": "16/11/2018",
        "developer": "Game Freak",
        "platform":	"Nintendo Switch",
        "genre": "Role Playing",
        "edition": "Standard Edition",
        "softwareFormat": "Physical",
        "multiplayer": "No"
    },
    {
        "sku": "6256852",
        "title": "Battlefield V",
        "img": "https://www.gamestop.com/common/images/lbox/169892b.jpg",
        "publisher": "EA",
        "releaseDate": "20/11/2018",
        "developer": "Game Freak",
        "platform":	"Windows",
        "genre": "First Person Shooter",
        "edition": "Standard Edition",
        "softwareFormat": "Physical",
        "multiplayer": "Yes"
    }
];

export const fetchGames = createAction(FETCH_GAMES, () => games);

/* WHITOUT REDUX-ACTIONS
export const fetchGames = () => {
    return { type: FETCH_GAMES, payload:null }
};*/