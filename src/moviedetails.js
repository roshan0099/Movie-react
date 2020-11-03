import React from "react"

export default function Details(props){
    console.log(props)
    return(
        <div>
        <h1 style = {{color : "white"}}>{props.name.title}</h1>
        <h3 style = {{color : "grey"}}>{props.name.overview}</h3>
        </div>
    )
}