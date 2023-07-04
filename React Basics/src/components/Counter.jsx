import { useState } from "react"
const Counter=()=>{

    let[count,setCount]=useState(0)

    let inc=()=>{
        setCount(count+1)
    }
    let dec=()=>{
        setCount(count-1)
    }
    let res=()=>{
        setCount(0)
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={res}>reset</button>
        </div>
    )
}
export default Counter