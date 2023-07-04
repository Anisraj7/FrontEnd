import React, { useState } from 'react'

const D = () => {

    let [incre, setIncre] = useState(0)

    let clkinc =()=>{
        setIncre(incre+1)
    }
  return (
    <div>
    <h1>COMPONENT</h1>
    {incre}
    <button onClick={clkinc}>Increment</button>
    </div>
  )
}

export default D
