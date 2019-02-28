import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import AppFrame from "../../components/layout/AppFrame";
import {getGameBySku} from "../../selectors/games";
import GameData from "../../components/games/GameData";
import GameEdit from "../../components/games/GameEdit";

class GameContainer extends Component {

  renderBody = () => (
      <Route path="/games/:sku/edit" children={
          ( { match }) => {
            const GameControl = match ? GameEdit : GameData;
            return <GameControl {...this.props.game} />
          }
      } />
  );

  render() {
    return (
      <div>
        <AppFrame header={`Game ${this.props.sku}`}
                  body={this.renderBody()} />
      </div>
    );
  }
}

GameContainer.propTypes = {
  sku: PropTypes.string.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => (
    { game: getGameBySku(state, props) }
);

export default connect(mapStateToProps, null)(GameContainer);