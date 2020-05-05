import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
