import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7)
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/Help">
            <HelpPage />
          </Route>
          <Route path="/">
            <MapPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
