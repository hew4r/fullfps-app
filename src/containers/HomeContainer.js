import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/layout/AppFrame";
import GamesActions from "../components/games/GamesActions";

class HomeContainer extends Component {


  render() {
    return (
      <div>
        <AppFrame
          header={'Home'}
          body={
            <div>
              Initial Display
            </div>

          } />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;