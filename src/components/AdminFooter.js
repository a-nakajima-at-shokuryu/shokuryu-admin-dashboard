import React, { useState } from 'react'
import clsx from 'clsx';
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction, 
  Tooltip, 
} from '@material-ui/core';
import { withTooltip } from '../Providers/MuiProvider';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const footerWidth = 600; 

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky', 
    bottom: 0, 
    margin: '0 auto', 
    width: footerWidth, 
    boxShadow: theme.shadows[5], 
    zIndex: theme.zIndex.snackbar, 
  }, 
}));

const AdminFooter = ({
  children = defaultChildren, 
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);
  const [value, setValue] = useState(); 

  return (
    <BottomNavigation 
      className={classes.root} 
      value={value}
      onChange={(e, value) => {
        setValue(value)
      }}
      {...other}
    >
     {children} 
    </BottomNavigation>
  )
}

export default AdminFooter;

const defaultChildren = (
  [
    [<RestoreIcon/>, 'restore', 'リストア', ], 
    [<LocationOnIcon/>, 'locationOn', '位置情報', ], 
    [<BookmarkIcon/>, 'bookmark', 'ブックマーク', ], 
    [<FavoriteIcon/>, 'favorite', 'お気に入り', ], 
    [<ThumbUpIcon/>, 'thumbUp', 'いいね', ], 
  ].map(([icon, value, title]) => ({icon, value, title}))
  .map(({icon, value, title}, index) => (
      <BottomNavigationAction 
        key={index}
        icon={icon} 
        label={title || value} 
        value={value || title}
        showLabel
        title={title || value}
      />
    )
  )
);