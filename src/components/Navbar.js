import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import StyledAppBar from '../styledComponents/StyledAppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StyledCloseIcon from '../styledComponents/StyledCloseIcon';
import { withStyles } from '@material-ui/core/styles';
import StyledTabs from '../styledComponents/StyledTabs';
import StyledTab from '../styledComponents/StyledTab';

const styles = theme => ({

    sideBar: {
        backgroundColor: '#419EF3',
        width: '60vw',
        height: '100%',
        color: '#F2F2F2',
    },
});

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event, newValue) {

        this.setState({
            value: newValue,
        });
    }

    render(){

        const classes = this.props.classes;

        return (
            <Fragment>
                <StyledAppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            onClick={this.handleClick}
                            edge="start">

                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </StyledAppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    role="presentation"
                    open={this.state.open}>
                    <div
                        className={classes.sideBar}>
                        <div>
                            <IconButton onClick={this.handleClick}>
                                <StyledCloseIcon/>
                            </IconButton>
                        </div>
                        <StyledTabs
                            orientation="vertical"
                            value={this.state.value}
                            onChange={this.handleChange}>

                            <StyledTab label="Home"/>
                            <StyledTab label="Resume"/>
                            <StyledTab label="Projects"/>
                            <StyledTab label="Contact"/>

                        </StyledTabs>
                    </div>
                </Drawer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Navbar);