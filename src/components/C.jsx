import React, { useState } from 'react'

const C = () => {
    let [incre, setIncre] = useState(0)

    let ovrinc =()=>{
        setIncre(incre+1)
    }
  return (
        <div>
            <h1>COMPONENT1</h1>
            {incre}
            <button onMouseOver={ovrinc}>Increment</button>
        </div>
  )
}

export default C