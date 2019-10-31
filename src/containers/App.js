import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {BrowserRouter} from "react-router-dom";

import Navbar from "../components/Navbar";
import PageBody from "./PageBody";

export default function App (){

    return(
        <BrowserRouter>
            <CssBaseline />
            <Navbar/>
            <PageBody/>
        </BrowserRouter>
    );
};