import React from 'react';
import PropTypes from 'prop-types';

const GamesActions = ({ children }) => {
  return (
    <div>
      <div className="games-actions">
        <div>{children}</div>
      </div>
    </div>
  );
};

GamesActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GamesActions;