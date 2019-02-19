import React from 'react';
import PropTypes from 'prop-types';

const GameData = ({ title, releaseDate, genre }) => {
  return (
    <div>
      <div className="game-data">
        <h2>Game Detail</h2>
        <div><strong>Title</strong>{title}</div>
        <div><strong>Release Date</strong>{releaseDate}</div>
        <div><strong>Genre</strong>{genre}</div>
      </div>
    </div>
  );
};

GameData.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default GameData;