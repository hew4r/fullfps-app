import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const AppHeader = props => {
  return (
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          { props.title }
      </Typography>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;