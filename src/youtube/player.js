import React from 'react';

function Player(props) {


    let playerWidth = 400
    let message = "Width of player is "
    let videourl = "https://www.youtube.com/embed/" + props.vid

    return (
        <div style={{
            textAlign:"center"
        }}>
            <h1>{props.myname}</h1>
            <h2>{message + " " + playerWidth}</h2>
            <h2>{props.vid}</h2>
            <h3>{videourl}</h3>
            <iframe width={playerWidth} height="315" src={videourl} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
    );
}

export default Player;