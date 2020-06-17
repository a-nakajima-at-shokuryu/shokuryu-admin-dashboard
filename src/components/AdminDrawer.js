import React from 'react'
import clsx from 'clsx';
import {
  makeStyles, 
  Drawer, 
  Toolbar, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
} from '@material-ui/core';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { withTooltip } from '../Providers/MuiProvider'; 

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[5], 
  }, 
}));

const AdminDrawer = ({
  children = defaultChildren, 
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);

  return (
    <Drawer 
      className={classes.root}
      classes={{
        paper: classes.root, 
      }} 
      open 
      variant="persistent"
      {...other}
    >
      <Toolbar />
      <Divider />
     {children} 
    </Drawer>
  )
}

export default AdminDrawer;

const defaultChildren = (
  <List>
    {[
      [<PhonelinkRingIcon/>, 'スマートフォン', 'スマフォ', ], 
      [<DesktopMacIcon/>, 'デスクトップ（Mac）', 'Mac', ], 
      [<DesktopWindowsIcon/>, 'デスクトップ（Windows)', 'Windows', ], 
    ].map(([icon, title, text]) => ({icon, title, text}))
    .map(({icon, title, text}, index) => (
      <ListItem button key={index}>
        {withTooltip(title)(<ListItemIcon>{icon}</ListItemIcon>)}
        <ListItemText>{text || title}</ListItemText>
      </ListItem>
    ))}
  </List>
);
