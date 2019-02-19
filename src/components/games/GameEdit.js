import React from 'react';
import PropTypes from 'prop-types';

const GameEdit = ({ title, releaseDate, genre }) => {
  return (
    <div>
      <h2>Game Edition</h2>
      <h3>Title: {title} / Release Data: {releaseDate} / Genre: {genre}</h3>
    </div>
  );
};

GameEdit.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.string,
};

export default GameEdit;