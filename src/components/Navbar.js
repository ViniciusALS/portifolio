import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import {default as Tabs} from '../styles/StyledTabs';
import {default as Tab} from '../styles/StyledTab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { AppBar } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    top: {
        backgroundColor: '#419EF3',
    },
    list: {
        width: 250,
        height: '100%',
        backgroundColor: '#419EF3',
        color: '#F2F2F2',
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("/home");
    let history = useHistory();

    const toggleDrawer = () => event => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(!open);
    };


    function handleChange (event, newValue) {

        const newPath = (newValue === "/home") ?  '/' : newValue;

        history.push(newPath);
        setValue(newValue);
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}>

            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={toggleDrawer()}
                    aria-label="Close menu"
                    edge="start">

                    <CloseIcon/>
                </IconButton>
            </Toolbar>

            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}>

                {['home', 'resume', 'projects', 'contact'].map(text => (
                    <Tab
                        key={text}
                        label={text}
                        value={"/" + text}/>
                ))};
            </Tabs>
        </div>
    );

    return (
        <Fragment>
            <AppBar
                className={classes.top}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open menu"
                        onClick={toggleDrawer()}
                        edge="start">

                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onClose={toggleDrawer()}>

                {sideList()}
            </Drawer>
        </Fragment>
    );
}
