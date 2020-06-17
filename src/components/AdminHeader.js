import React from 'react'
import clsx from 'clsx';
import {
  makeStyles,
  AppBar,
  Toolbar, 
  Typography, 
  IconButton, 
  Link, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'; 
import GitHubIcon from '@material-ui/icons/GitHub'; 
import { withTooltip } from '../Providers/MuiProvider'; 

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const AdminHeader = ({
  className, 
  menuClick, 
  title, 
  gitUrl, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);

  return (
    <AppBar className={classes.root} {...other}>
      <Toolbar>
        <Icon icon={<MenuIcon/>} title="メニュー" edge="start" onClick={menuClick} />
        <Logo title={title} />
        <Spacer />
        <Icon icon={<GitHubIcon/>} title="Gitリポジトリ" edge="end" href={gitUrl} />
      </Toolbar>
    </AppBar>
  )
}

export default AdminHeader;

const Icon = ({
  icon, 
  title, 
  ...other 
}) => {
  return withTooltip(title)(
    <IconButton color="inherit" {...other}>
      {icon}
    </IconButton>
  );
};

const Logo = ({
  title, 
  text, 
  ...other 
}) => {
  return (
    <Typography {...other}>
      <Link underline="none" color="inherit" style={{ cursor: 'pointer' }}>
        {text||title}
      </Link>
    </Typography>
  );
};

const Spacer = () => <div style={{ flexGrow: 1 }} />