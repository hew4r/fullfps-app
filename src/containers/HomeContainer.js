import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import GamesActions from "../components/games/GamesActions";

class HomeContainer extends Component {
  
  handleOnClick = () => {
    this.props.history.push("/games");
  }
  
  render() {
    return (
      <div>
        <AppFrame
          header={'Home'}
          body={
            <div>
              Initial Display
              <GamesActions>
                <button onClick={this.handleOnClick}>List of Games</button>
              </GamesActions>

            </div>
          
          } />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);