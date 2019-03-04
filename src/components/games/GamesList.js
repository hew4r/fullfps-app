import React from 'react';
import PropTypes from 'prop-types';
import GamesListItem from "./GamesListItem";
import { Grid } from '@material-ui/core';

const GamesList = ({ games, urlPath }) => {
  return (
    
    <div className="games-list">
      
      <Grid item xs={12}>

        <Grid container justify="center" spacing={16}>
        {
          games.map( g =>
  
            <Grid key={g.sku} item>
                <GamesListItem
                  key={g.sku}
                  sku={g.sku}
                  name={g.name}
                  urlImg={g.urlMdImage}
                  platform={g.platform}
                  releaseDate={g.releaseDate}
                  price={g.price}
                  editAction={'Editar'}
                  delAction={'Eliminar'}
                  urlPath={urlPath}/>
            </Grid>
          )
          
        }
        </Grid>
      </Grid>

    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default GamesList;