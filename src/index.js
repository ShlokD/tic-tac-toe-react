import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import ticTacToe from "./reducers";

const store = createStore(ticTacToe);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
