import React from 'react';
import Video from './video';

function VideoList() {
    return ( 
        <div>
            <h2>List of video component will come here:</h2>
            <div>
                <Video name="some title 1" 
                    likes="88"
                    dislikes="8"
                    videoid="GGV8axWrYik"
                    color="red"></Video>
                <Video name="some title 2" 
                    likes="882"
                    dislikes="18"
                    videoid="NhBzhi9jPFs"
                    color="blue"></Video>
                <Video name="some title 3" 
                    likes="228"
                    dislikes="12"
                    videoid="JNXKB_dq8iw"
                    color="orange"></Video>
                <Video name="some title 4" 
                    likes="1111"
                    dislikes="7"
                    videoid="JbmaWDqUJew"
                    color="green"></Video>
            </div>
        </div>
     );
}

export default VideoList;