import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter  } from 'react-router-dom';
import AppFrame from "../../components/layout/AppFrame";
import { fetchGames } from "../../actions/fetchGames";
import { updateGames } from "../../actions/updateGames";
import {getGameBySku} from "../../selectors/games";
import GameData from "../../components/games/GameData";
import GameEdit from "../../components/games/GameEdit";




class GameContainer extends Component {
  
  componentDidMount() {
    if (!this.props.game) {
        this.props.fetchGames();
    }
  }
  
  handleSubmit = values => {
      console.log(JSON.stringify(values));
      const { id } = values;
      this.props.updateGames(id, values);
  }
  
  handleOnBack = () => {
      this.props.history.goBack();
  }
  
  renderBody = () => (
      <Route path="/games/:sku/edit" children={
          ( { match }) => {
            const GameControl = match ? GameEdit : GameData;
            return <GameControl {...this.props.game}
                                onSubmit={this.handleSubmit}
                                onBack={this.handleOnBack}/>
          }
      } />
  );

  render() {
    return (
      <div>
        <AppFrame header={`Game: ${this.props.sku}`}
                  body={this.renderBody()} />
      </div>
    );
  }
}

GameContainer.propTypes = {
  sku: PropTypes.string.isRequired,
  game: PropTypes.object,
  fetchGames: PropTypes.func.isRequired,
  updateGames: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchGames, updateGames };

const mapStateToProps = (state, props) => (
    { game: getGameBySku(state, props) }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameContainer));