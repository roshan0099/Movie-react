import React from "react"
import Details from "./moviedetails"
import Search from "./search"
import {BrowserRouter as Router, Switch, Exact,Route} from "react-router-dom"

export default function App(){
    return(
        <Router>
            <Route path = "/" exact component ={Search}/>
        
        </Router>

    )
}