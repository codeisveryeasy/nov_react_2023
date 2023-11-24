import React from 'react';
import LogoComponent from './youtube/logo';
import VideoList from './youtube/videolist';
import RemoteAPI from './api/remote';


function RootCoponent() {
    return ( 
        <div>
            <h1>I am Root component.</h1>
            <h2>I am created using JSX.</h2>
            <h2>React is managing components.</h2>
            <RemoteAPI></RemoteAPI>
            <LogoComponent></LogoComponent>
            <VideoList></VideoList>
           
        </div>
     );
}

export default RootCoponent;