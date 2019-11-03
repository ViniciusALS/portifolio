import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        borderRadius: 4,
        backgroundColor: '#2A6AA5',
        color: '#F2F2F2',
        textAlign: 'center',
        margin: '0 0 1.5em 0',
    },
    input: {
        padding: '12px 0',
        '&:focus': {
            borderRadius: 4,
        },
    },
}))(InputBase);

const BootstrapSelect = withStyles(theme => ({
    root: {
        borderRadius: 4,
        backgroundColor: '#2A6AA5',
        color: '#F2F2F2',
        textAlign: 'center',
    },
    icon: {
        color: '#F2F2F2',
        margin: '0 0.5rem',
    }
}))(Select);

export default function(props) {
    // const [skill, setSkill] = React.useState(0);

    // const handleChange = event => {
    //     setSkill(event.target.value);
    // };

    return (
        <BootstrapSelect
            value={props.value}
            onChange={props.onChange}
            input={<BootstrapInput />}>

            {props.options.map((text, index)=>(
                <MenuItem key={text} value={index}>{text}</MenuItem>
            ))}
        </BootstrapSelect>
    );
}
