import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const styles = {

    root: {
        backgroundColor: '#419EF3',
        boxShadow: 'none',
    },
    list: {
        width: 250,
    },
    paper: {
        height: "100%",
        backgroundColor: '#419EF3',
        color: 'white',
        fontWeight: 'light',

    }
}

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.classes = this.props.classes;
        this.state = {
            open: false,
        }
    };

    handleClick(event) {

        event.preventDefault();

        this.setState({
            open: !this.state.open
        });
    };

    render(){

        return (
            <Fragment>
                <AppBar position="fixed" className={this.classes.root}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            onClick={this.handleClick}
                            edge="start">

                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"

                    open={this.state.open}>
                    <div
                        role="presentation"
                        className={this.classes.paper}>

                        <div>
                            <IconButton onClick={this.handleClick}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <List className={this.classes.list}>
                            <ListItem button selected>
                                <Typography variant="button">Home</Typography>
                            </ListItem>
                            <ListItem button>
                                <Typography variant="button">Resume</Typography>
                            </ListItem>
                            <ListItem button>
                                <Typography variant="button">Projects</Typography>
                            </ListItem>
                            <ListItem button>
                                <Typography variant="button">Contact</Typography>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Navbar);