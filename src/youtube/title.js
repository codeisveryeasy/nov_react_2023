import React from 'react';

function Title(props) {

    //props.myname = "update me"

    let styleTitle ={
        color:props.color,
        textAlign:"center"
    }

    return ( 
        <div style={styleTitle}>
            <h1>Title: {props.myname} {props.color}</h1>
        </div>
     );
}

export default Title;