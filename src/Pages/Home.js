import React, {Fragment} from 'react';
import Dropbox from "../components/Dropbox";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tag from '../components/Tag'

import portrait from '../images/portrait.png';
import design from '../images/design.svg';

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
    h2: {
        fontWeight: "bold",
        fontSize: '2rem',
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

    const [state, setState] = React.useState({
        skillShown: 0,
    });

    const handleDropboxChange = (event) => {
        setState({
            skillShown: event.target.value,
        });
    }

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
            <section
                className={classes.section}
                style={{
                    backgroundColor: "#419EF3"
                }}>

                <Typography
                    variant="h2"
                    className={classes.h2}
                    style={{
                        color: '#F2F2F2',
                    }}>

                    My Skills
                </Typography>

                <Dropbox
                    value={state.skillShown}
                    onChange={handleDropboxChange}
                    options={[
                        'Electronics Engineering',
                        'Web Development',
                        'Software Development',
                    ]}/>

                <Paper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2em',
                        backgroundColor: '#EBEBEB',
                        boxShadow: '4px 4px 4px 2px rgba(0,0,0,.25)',
                    }}>
                    <img alt="Design section logo" src={design}/>
                    <Typography variant="h3">Design</Typography>
                    <Typography variant="body1">
                        I like UX / UI and I usually use tools like:
                    </Typography>
            </section>
        </Fragment>
    );
}