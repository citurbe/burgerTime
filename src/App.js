import React, { Component } from 'react';
import BurgerForm from './components/burgerForm';
import BurgerList from './components/burgerList';
import logo from './assets/images/burger.png';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import configureStore from './store/createStore';
import { Welcome } from './components/welcome';
import { Search } from './components/search';
import './App.css';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Burger Time!</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path ="/search" component={Search} />
            <Route path ="/list" component={BurgerList} />
            <Route path="/new" component={BurgerForm} />
          </Switch>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
