import {createStore, applyMiddleware, compose} from 'redux';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            (thunk)
        ))
  );
}