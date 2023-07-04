import React from 'react'
import Hoc1 from './Hoc'

const F = (props) => {
  return (
    <div>
        <h1>COMPONENT 2</h1>
        {props.data}
        <button onMouseOver={props.Func}>INCREMENT</button>
    </div>
  )
}

export default Hoc1(F)