import React, { Fragment } from 'react'
import  {useState} from 'react'
import data from "./user.json"

const List=()=> {
    let[state, setState]=useState(data)
  return (
    <div>
        {/* <h1>{state[0]}</h1>
        <h1>{state[1]}</h1>
        <h1>{state[2]}</h1>
        <h1>{state[3]}</h1>
        <h1>{state[4]}</h1> */}
        {state.map((x)=>{
            return(
                <Fragment key={x.id}>


                <h1>{x.login}</h1>
                <h1>{x.id}</h1>
                <img src={x.avatar_url} alt="" />


                </Fragment>                
            )
        })}

    </div>
  )
}

export default List