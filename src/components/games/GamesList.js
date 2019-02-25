import React from 'react';
import PropTypes from 'prop-types';
import GamesListItem from "./GamesListItem";

const GamesList = ({ games, urlPath }) => {
  return (
    <div>
      <div className="games-list">
        {
          games.map( g =>
            <GamesListItem
              key={g.sku}
              sku={g.sku}
              platform={g.platform}
              title={g.title}
              img={g.img}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlPath={urlPath}/> )
        }
      </div>
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default GamesList;