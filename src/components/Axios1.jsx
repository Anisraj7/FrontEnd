import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios1 = () => {

    let [state, setState]= useState([])
    let[id, setId] =useState("")
    let [abc, setAbc] =useState("")


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=>{
            console.log(response.data);
            setState(response.data)
        })
    },[abc])

    let btn=()=>{
        setAbc(id)
    }
  return (
    <div>
        {/* {state.map((x)=>{
            return(
                <h1>{x.id}</h1>
            )
        })} */}
        <input type="text" value={id} onChange={(e)=>{setImmediate(e.target.value)}}/>
        <button onClick={btn}>Enter</button>
        
        {state.abc}
        
    </div>
  )
}

export default Axios1