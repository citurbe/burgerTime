import React, { Component } from 'react';
import { Burger } from './components/burger';
import BurgerForm from './components/burgerForm';
import logo from './assets/images/burger.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Burger Time!</h1>
        </header>
        <div className="App-intro">
          <BurgerForm

          />
        </div>
      </div>
    );
  }
}

export default App;
