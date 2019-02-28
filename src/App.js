import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import GamesContainer from "./containers/games/GamesContainer";
import GameContainer from "./containers/games/GameContainer";
import {AppBar, Button, CssBaseline, Grid, Paper, Toolbar, Typography} from "@material-ui/core";

class App extends Component {


    renderGameNewContainer = () => <h1>Game New Container</h1>

  render() {
    return (
        <Router>
        <div className='layout-root'>
            <CssBaseline />
            <Grid container spacing={8}>

                <Grid item xs={12}>
                    <Paper>
                        <AppBar position="static" color="default" className='layout-appbar'>
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap className='layout-toolbar-title' >
                                    FULL_FPS
                                </Typography>

                                <NavLink to="/games" className="link">
                                    <Button>GAMES</Button>
                                </NavLink>
                                <NavLink to="/" className="link">
                                    <Button>ACCESORIES</Button>
                                </NavLink>
                            </Toolbar>
                        </AppBar>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className='layout-content'>

                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/games" component={GamesContainer}/>
                        <Switch>
                            <Route exact path="/games/new" component={this.renderGameNewContainer}/>
                            <Route exact path="/games/:sku" render={props =>
                                <GameContainer
                                    platform={props.match.params.platform}
                                    sku={props.match.params.sku}/>}
                            />
                        </Switch>

                    </Paper>
                </Grid>
            </Grid>

        </div>
        </Router>

    );
  }
}

export default App;