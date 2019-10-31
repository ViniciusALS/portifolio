import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {BrowserRouter} from "react-router-dom";

import Navbar from "../components/Navbar";
import PageBody from "./PageBody";

class App extends Component{

    render() {

        return(
        <BrowserRouter>
            <CssBaseline />
            <Navbar/>
            <PageBody/>
        </BrowserRouter>);
    }
};

export default App;