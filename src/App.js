import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import devbot from './devbot.svg';
import cat from './cat.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import GamesContainer from "./containers/games/GamesContainer";
import GameContainer from "./containers/games/GameContainer";
import AppNavBar from "./components/AppNavBar";

class App extends Component {
  
  renderGameNewContainer = () => <h1>Game New Container</h1>
  
  render() {
    return (

      <nav>
          <nav-wrapper>



            <Router>
              <div className="App">
                  <AppNavBar/>
                <Route exact path="/" component={HomeContainer}/>
                <Route exact path="/:platform/games" component={GamesContainer}/>
                <Switch>
                  <Route exact path="/:platform/games/new" component={this.renderGameNewContainer}/>
                  <Route exact path="/:platform/games/:sku" render={props =>
                      <GameContainer
                          platform={props.match.params.platform}
                          sku={props.match.params.sku}/>}
                  />

                </Switch>

                {/*
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Link to="/games">games...</Link>*/}

              </div>
            </Router>
          </nav-wrapper>
      </nav>
    );
  }
}

export default App;