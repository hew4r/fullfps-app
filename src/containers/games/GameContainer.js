import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from "../../components/AppFrame";

class GameContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame header={'Game'}
                  body={<p>Info Game</p>} />
      </div>
    );
  }
}

GameContainer.propTypes = {};

export default connect(null, null)(GameContainer);