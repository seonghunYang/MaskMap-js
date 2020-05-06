import React from 'react';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useSelector } from 'react-redux'
import StoreHelper from '../util/StoreHelper';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { ListItemIcon } from '@material-ui/core';

const StoreItem = ({ store }) => {
  const {addr, name, stock_at} = store;
  const {color, desc, short} = StoreHelper(store); 
  return (
    <ListItem>
      <ListItemIcon>
        <StorefrontIcon style={{color}} />
      </ListItemIcon>
      <ListItemText primary={
        <React.Fragment>
          <span style={{color}}>
            <b>{name}</b> ({desc})
          </span>
        </React.Fragment>
      } secondary={
        <React.Fragment>
          <span>
          {addr}
          </span><br/>
          <span style={{color: "#ccc"}}>
            입고: {stock_at}
          </span>
        </React.Fragment>
      } />
    </ListItem>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListPage = () => {
  const stores = useSelector(state => state.stores);
  const classes = useStyles();
  return (
    <>
      <AppBar />

      <List className={classes.root}>
        {stores.map(store => (<StoreItem key={store.code} store={store} />))}
      </List>
      
      <BottomNav />
    </>
  )
};

export default ListPage;