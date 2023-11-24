import React, { useState } from 'react';

function Action(props) {

    let [score, updateScore] =  useState(4444)
    let [likesState, updateLikesState] = useState(parseInt(props.likes))
    let [dislikesState, updateDisLikesState] = useState(parseInt(props.dislikes))

    let changeValue=function(){
        console.log("changeValue called")
        //updateScore(score+1)
        updateLikesState(likesState+1)
    }

    let changeDislike=()=>{
        updateDisLikesState(dislikesState+1)
    }


    return ( 
        <div style={{
            textAlign:"center"
        }}>
            <h3>Score: {score}</h3>
            <button onClick={changeValue}>Likes {likesState}</button>
            &nbsp;
            <button onClick={changeDislike}>Dislikes {dislikesState}</button>
        </div>
     );
}

export default Action;