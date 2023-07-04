import { useState } from "react"
const State=()=>{

    let[count,setCount]=useState("i am hungry")

    let btn=()=>{
        setCount("i am full")
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={btn}>Food</button>
        </div>
    )
}
export default State