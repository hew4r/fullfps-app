import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AppFrame from "../../components/AppFrame";
import GamesList from "../../components/games/GamesList";
import GamesActions from "../../components/games/GamesActions";

const games = [
  {
    "sku": "6259290",
    "title": "Anthem",
    "img": "anthem-ps4.jpg",
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
    "img": "pokem-nintendo.jpg",
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
    "img": "battlefield-v-pc.jpg",
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

class GamesContainer extends Component {
  
  handleAddNew = () => {
    this.props.history.push('/games/new');
  };
  
  renderBody = games => (
    <div>
      <GamesList games={games} urlPath={'games/'}/>
      
      <GamesActions>
        <Button variant="contained" color="primary" onClick={this.handleAddNew}>
          Add
        </Button>
      </GamesActions>
    </div>
  )
  
  render() {
    return (
      <div>
        <AppFrame
          header={'List of Games'}
          body={this.renderBody(games)} />
      </div>
    );
  }
}

GamesContainer.propTypes = {};

export default withRouter(GamesContainer);