import React from 'react'
import Hoc1 from './Hoc'

const E = (props) => {
  return (
    <div>
        <h1>COMPONENT 1</h1>
        {props.data}
        <button onClick={props.Func}>INCREMENT</button>
    </div>
  )
}

export default Hoc1(E)