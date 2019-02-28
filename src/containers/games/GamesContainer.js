import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AppFrame from "../../components/layout/AppFrame";
import GamesList from "../../components/games/GamesList";
import GamesActions from "../../components/games/GamesActions";
import { fetchGames } from "../../actions/fetchGames";
import {getGames} from "../../selectors/games";

class GamesContainer extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    handleAddNew = () => {
        this.props.history.push('/games/new');
    };

    renderBody = games => (
        <div>
            <GamesList games={games} urlPath={'games/'}/>

            <GamesActions>
                <Button variant="contained" color="primary" onClick={this.handleAddNew}>
                    Add
                </Button>
            </GamesActions>
        </div>
    )
  
    render() {
        return (
            <div>

                <AppFrame
                    header={'Games'}
                    body={this.renderBody(this.props.games)} />
            </div>
        );
  }
}

GamesContainer.propTypes = {
    fetchGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
};

GamesContainer.defaultProps = {
    games: [ ]
};

const mapDispatchToProps = { fetchGames };

const mapStateToProps = state => ({
    games: getGames(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesContainer));

/* WHITOUT REDUX-ACTIONS
const mapDispatchToProps = dispatch => (
    { fetchGames: () => dispatch(fetchGames()) }
);*/