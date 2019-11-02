import React, {Fragment} from 'react';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import portrait from '../images/portrait.png';

const useStyles = makeStyles({
    section: {
        paddingTop: '6.1rem',
        padding: '0 2rem 0 2rem',
        // textJustify: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    title: {
        fontWeight: "bold",
        fontSize: '2.2rem',
        paddingBottom: '2rem',
    },
    body: {
        fontSize: '1.1rem',
        paddingBottom: '0.25rem',
    },
    image: {
        marginTop: '2.5rem',
        width: '243px',
        height: '243px',
        alignSelf: 'center',
    },
});

export default function Home (){

    const classes = useStyles();

    return(
        <Fragment>
            <section
                className={classes.section}>

                <Typography
                    variant="h1"
                    className={classes.title}>

                    Hey, I am <br/>
                    Vinicius A. L. Souza
                </Typography>
                <Typography
                    className={classes.body}>

                    I like making stuff and learning new things.
                </Typography>
                <Typography
                    className={classes.body}>

                    I am an Electronics Engineering Technology student at Humber College.
                </Typography>
                <Typography
                    className={classes.body}>

                    I was born in Brazil but I am currently linving in Toronto, CA.
                </Typography>
                <Typography
                    className={classes.body}>

                    Besides engineering and science, I also love traveling, reading, and food.
                </Typography>

                <img className={classes.image} alt="Vinicius` portrait" src={portrait}/>
            </section>
        </Fragment>
    );
}