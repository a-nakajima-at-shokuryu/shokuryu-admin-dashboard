import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminDrawer from '../components/AdminDrawer';
import AdminFooter from '../components/AdminFooter';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => {
  const drawerWidth = open => open ? 200 : theme.spacing(7); 
  const headerWidth = open => `calc(100vw - ${drawerWidth(open)}px)`; 
  const headerHeight = theme.mixins.toolbar.minHeight; 

  const transition = theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp, 
    duration: theme.transitions.duration.enteringScreen, 
  })

  return {
    root: {}, 
    header: {
      width: headerWidth, 
      transition, 
    }, 
    drawer: {
      width: drawerWidth, 
      transition, 
      overflowY: 'hidden', 
      whiteSpace: 'nowrap', 
    }, 
    footer: {}, 
    main: {
      height: `calc(100vh - ${headerHeight}px)`, 
      transition, 
      marginLeft: drawerWidth, 
      marginTop: headerHeight, 
      padding: theme.spacing(1), 
    }, 
  };
});


const AdminLayout = ({
  children, 
  className, 
  title, 
  gitUrl, 
  ...other 
}) => {
  const [open, setOpen] = useState(true); 
  const classes = useStyles(open);
  classes.root = clsx(classes.root, className);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root} {...other}>
      <AdminHeader className={classes.header} 
        title={title}
        gitUrl={gitUrl}
        menuClick={toggleOpen}
      />
      <AdminDrawer className={classes.drawer} />
      <main className={classes.main}>
        {children}
      </main>
      <AdminFooter className={classes.footer} />
    </div>
  )
}

export default AdminLayout
