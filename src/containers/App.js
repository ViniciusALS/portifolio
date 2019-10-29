import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {BrowserRouter} from "react-router-dom";

import Navbar from "../components/Navbar";

class App extends Component{

    render() {

        return(
        <BrowserRouter>
            <CssBaseline />
            <Navbar/>
        </BrowserRouter>);
    }
};

export default App;