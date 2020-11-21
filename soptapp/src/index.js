import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import {createStore} from 'redux';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
