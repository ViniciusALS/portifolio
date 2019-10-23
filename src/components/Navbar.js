import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
                <AppBar position="fixed">
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

                    <div>
                        <IconButton onClick={this.handleClick}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Resume" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Projects" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
            </Fragment>
        );
    }
}

export default Navbar;
