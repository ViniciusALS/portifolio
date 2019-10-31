import React from 'react';
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

import {
    Switch,
    Route,
} from "react-router-dom";

export default function PageBody (){

    return(
        <Switch>
            <Route path="/resume">
                <Resume />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}