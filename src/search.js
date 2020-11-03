import React, {useState, useEffect} from "react"
import {Link, Route, BrowserRouter as Router} from "react-router-dom"
import Details from "./moviedetails"
import './appStyle.css'


const key = `${process.env.REACT_APP_API_KEY}`
export default function Search(){
    var lol = false
    console.log(`${process.env.REACT_APP_API_KEY}`)
    const [name,setName] = useState()
    const [store, setStore] = useState([])
    const [load,setLoad] = useState(true)
    const [movie,setMovie] = useState([])
    const [click, setClick] = useState(false)
useEffect(() => {
    
    if(name !== ""){
        fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&query="+name)
        .then(res => {
            if (res.ok){
                setLoad(false)
            return(res.json())
            }
            else
            console.log("fucked up")
        })
        .then(data => { 
        //    (console.log(data.results))
           
           
           name !== undefined  && setStore(data.results.filter(elm => {
               
            setLoad(true)
            return(elm.poster_path !== null && elm.vote_count> 44 &&elm.backdrop_path !== null)}))
          
        } 
    
        )
        .catch(err => (console.log("this is the error" + err)))
    }
    
    if(store){
        console.log("hey");
    }
    else
    console.log("aahda");
  setStore([])
 

},[name])
    
function Searching(){
    return(
        <div className = "movie-container">
        {name !=="" && name !== undefined ? (store.length !== 0 ? (load !== true ?(<div>loading</div>) :store.map((elm,index) => {
            // console.log(store);
            
           return(<div key = {index} className = "movie-display">
                
                <img onError={(e) =>(console.log(e.target.src))} className="poster" src={`https://image.tmdb.org/t/p/original/${elm.poster_path}`}></img>
                
                <div className = "movie-name"><h3 className = "name" onClick = {(e) => {
                    
                    setMovie(elm);
                    (setClick(true))}}>{elm.title}</h3></div>
                
            </div>)
        })):<div style={{color:"grey"}}>WoW Empty</div>): <div style={{color:"white"}}>Type Something biatch</div>}
    </div>
    )
}


    
    return(
        <div className =" body">
            <div className ="main-header">
                <h1 className ="title">Movinfo</h1>
               <div className ="outer">
                   <form className="form" onSubmit ={(e) => {
                        e.preventDefault()
                    }} onClick = {() => (setClick(false))}>
                    <i className ="fa fa-search"></i>
                    <input placeholder ="Movie name" type = "search" className ="search-option" onChange = {(e) => {
                        return(setName(e.target.value))
                    }}></input>
                    </form>
                </div> 
            </div>
       
                {click ? <Details name = {movie}/> : <Searching/>} 
        </div>
    )}



//name !== "" ?
//: <div style ={{color : "white"}}>oops</div>

    // onSubmit = {(e) =>{
    //     e.preventDefault()
    //     console.log(load)
    //     return(setLoad(true))}}