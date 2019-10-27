import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.classes = this.props.classes;
        this.state = {
            open: false,
            value: 0,
        }
    };

    handleClick() {

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
                    role="presentation"
                    open={this.state.open}>
                    <div>
                        <IconButton onClick={this.handleClick}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Tabs
                        orientation="vertical"
                        value={0}
                        onChange={this.handleChange}>

                        <Tab label="Home"></Tab>
                        <Tab label="Resume"></Tab>
                        <Tab label="Projects"></Tab>
                        <Tab label="Contact"></Tab>

                    </Tabs>
                </Drawer>
            </Fragment>
        );
    }
}

export default Navbar;