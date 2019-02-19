import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import devbot from './devbot.svg';
import cat from './cat.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import GamesContainer from "./containers/games/GamesContainer";

class App extends Component {
  
  renderHome = () => <h1>Home</h1>;
  
  renderGameContainer = () => <img src={devbot} className="App-logo" alt="devbot" />
  
  renderGamesListContainer = () => <img src={cat} className="App-logo" alt="cat" />
  
  renderGameNewContainer = () => <h1>Game New Container</h1>
  
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/games" component={GamesContainer}/>

          <Switch>
            <Route exact path="/games/new" component={this.renderGameNewContainer}/>
            <Route exact path="/games/:sku" component={this.renderGameContainer}/>
          </Switch>
          
          {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Link to="/games">games...</Link>*/}
        </div>
      </Router>
    );
  }
}

export default App;