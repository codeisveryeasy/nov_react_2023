import React from 'react';
import Player from './player';
import Action from './action';
import Title from './title';

function Video(props) {
    return ( 
        <div style={{
                border:"1px solid red",
                borderRadius:"10px",
                backgroundColor:"pink",
                margin:"5px",
                padding:"5px",
                textAlign:"center"
                }}>
            Video Player
            <br />
            {props.likes}
            <Title myname={props.name} color={props.color}></Title>
            <Player vid={props.videoid}></Player>
            <Action likes={props.likes} dislikes={props.dislikes}></Action>
        </div>
     );
}

export default Video;