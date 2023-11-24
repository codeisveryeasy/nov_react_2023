import axios from 'axios';
import React, { useEffect, useState } from 'react';


function RemoteAPI() {

    let [allusers, updateAllUsers] = useState([])
    let [singlePhoto, updateSinglePhoto] = useState({})

    let successFunction = function (response) {
        console.log("Response received")
        console.log(response)
    }

    let failureFunction = function (error) {
        console.log("Error received")
        console.log(error)
    }

    let iWillCallAPI = function () {
        axios.get("https://jsonplaceholder.typicode.com/users/")
            .then(successFunction)
            .catch(failureFunction)
    }


    //useEffect takes 2 parameters:
    //1. arrow callback function
    //2. array
    //useEffect(iWillCallAPI, [])
    useEffect(() => {
        iWillCallAPIArrow()
        callPhotoAPI()
    }, [])

    let callPhotoAPI=()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos/1")
            .then((response)=>{
                updateSinglePhoto(response.data)
            })
    }

    let iWillCallAPIArrow = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
            .then((response)=>{
                console.log("Response received")
                console.log(response)
                console.log(response.data)
                //update allusers state with response.data
                updateAllUsers(response.data)
                
            })
            .catch((error)=>{
                console.log("Error received")
                console.log(error)
            })
    }

    let displayUsers=()=>{
        return allusers.map((user, index)=>{
            console.log(index)
            console.log(user)
            return (
                <li>
                    {user.name}
                </li>
            )
        })
        
    }


    return (
        <div>
            <h1>Make API call!</h1>
            <h2>Display values from JSON response below.</h2>
            <h3>Count of users in allusers: {allusers.length}</h3>
            <ul>
                {displayUsers()}
            </ul>
            <div>
                <h1>Photo:</h1>
                <img src={singlePhoto.thumbnailUrl} alt="" />
            </div>
        </div>
    );
}

export default RemoteAPI;