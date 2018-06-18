import React, { Component } from 'react';
import BurgerForm from './components/burgerForm';
import logo from './assets/images/burger.png';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import configureStore from './store/createStore';
import { Welcome } from './components/welcome';
import Search from './components/search';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/createStore';
import './App.css';
import { Trashed } from './components/trashed';
import { Success } from './components/success';



const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Burger Time!</h1>
          </a>
        </header>
        <ConnectedRouter history={history}>
          <div className="container">
          <div className="nav">
            <Link to="/search">Get Burgers!</Link>
            <Link to="/new">New Burger!</Link>
          </div>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path ="/search" component={Search} />
              <Route path="/new" component={BurgerForm} />
              <Route path="/edit" component={BurgerForm} />
              <Route path ="/trashed" component = {Trashed} />
              <Route path="/success" component = {Success} />
            </Switch>
          </div>
        </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}



export default App;
