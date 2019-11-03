import React from 'react';

export default function(props){

    return(
        <div
            style={{
                width: '50%',
                height: '2em',
                lineHeight: '2em',
                textSize: '1.2em',
                color: '#F2F2F2',
                textAlign: 'center',
                backgroundColor: '#2A6AA5',
                borderRadius: '4px',
                alignSelf: 'center',
                boxShadow: '1px 1px 4px 2px rgba(0,0,0,.2)',
                margin: '1em 0 0 0',
            }}>

            {props.children}
        </div>
    )
}