import React from 'react';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { useSelector } from 'react-redux'

const StoreItem = ({ store }) => {
  const {addr, name, remain_state, stock_at} = store;
  return (
    <ListItem>
      <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      <ListItemText primary={name} secondary={addr} />
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
        {stores.map(store => (<StoreItem store={store} />))}
      </List>
      
      <BottomNav />
    </>
  )
};

export default ListPage;