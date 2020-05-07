import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {fetchStoreByGeo} from './actions';
import { useSelector, useDispatch } from 'react-redux';

import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';
import StorePage from './pages/StorePage';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7)
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const center = useSelector(state => state.center);
  useEffect(() => {
    dispatch(fetchStoreByGeo(...center, 5000));
  })
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
          <Route path="/stores/:code">
            <StorePage />
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
