import React, {Fragment} from 'react';
import Dropbox from "../components/Dropbox";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tag from '../components/Tag'
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';

import portrait from '../images/portrait.png';
import design from '../images/design.svg';
import frontEnd from '../images/frontEnd.svg';
import backEnd from '../images/backEnd.svg';
import tools from '../images/tools.svg';

const useStyles = makeStyles({
    section: {
        paddingTop: '6.1rem',
        padding: '0 2rem 0 2rem',
        backgroundColor: '#E5E5E5',
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

const CardDivider = withStyles(theme=>({
    root: {
        margin: '2rem 0',
    }
}))(Divider);

export default function(){

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
                    backgroundColor: "#419EF3",
                    height: 'auto'}}>

                <Typography
                    variant="h2"
                    className={classes.h2}
                    style={{
                        color: '#F2F2F2'}}>

                    My Skills
                </Typography>

                <Dropbox
                    value={state.skillShown}
                    onChange={handleDropboxChange}
                    options={[
                        'Electronics Engineering',
                        'Web Development',
                        'Software Development']}/>

                <Paper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2em',
                        backgroundColor: '#EBEBEB',
                        boxShadow: '2px 2px 4px 2px rgba(0,0,0,.2)'}}>

                    <img alt="Design section logo" src={design}/>
                    <Typography variant="h3">Design</Typography>
                    <Typography variant="body1">
                        Things I usually use:
                    </Typography>
                    <Tag>Figma</Tag>
                    <Tag>Adobe XD</Tag>
                    <Tag>Photoshop</Tag>
                    <Tag>Illustrator</Tag>
                    <Tag>Gimp</Tag>

                    <CardDivider/>

                    <img alt="Front End section logo" src={frontEnd}/>
                    <Typography variant="h3">Front End</Typography>
                    <Typography variant="body1">
                        Things I usually use:
                    </Typography>
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>Sass</Tag>
                    <Tag>React.js</Tag>
                    <Tag>Material-ui</Tag>
                    <Tag>jQuery</Tag>
                    <Tag>Bootstrap</Tag>

                    <CardDivider/>

                    <img alt="Back End section logo" src={backEnd}/>
                    <Typography variant="h3">Back End</Typography>
                    <Typography variant="body1">
                        Things I usually use:
                    </Typography>
                    <Tag>Node.js</Tag>
                    <Tag>PHP</Tag>
                    <Tag>SQL</Tag>

                    <CardDivider/>

                    <img alt="Tools section logo" src={tools}/>
                    <Typography variant="h3">Tools</Typography>
                    <Typography variant="body1">
                        Things I usually use:
                    </Typography>
                    <Tag>GitHub</Tag>
                    <Tag>GitLab</Tag>
                    <Tag>Terminal</Tag>
                    <Tag>VS Code</Tag>
                    <Tag>Slack</Tag>
                    <Tag>Kanban</Tag>
                </Paper>
            </section>
        </Fragment>
    );
}