import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
    },
    appBar: {

    },
}));

const Hadermenu = () => {
    const classes = useStyles();
    return (

        <AppBar className={classes.appBar}>
            <Toolbar>
                {/* <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={}
        >
          <MenuIcon />
        </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Kwitter</Link>
                </Typography>
                {/* <Button variant="text" color="inherit">
                All Posts
                </Button> */}
                <MenuItem component={Link} to='/all-post'>
                    All Posts
                </MenuItem>
                <MenuItem component={Link} to='/news'>
                    News
                </MenuItem >


            </Toolbar>

        </AppBar>


    );
};

export default Hadermenu;