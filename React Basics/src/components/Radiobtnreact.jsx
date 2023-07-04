import React from 'react'

const Radiobtnreact = () => {
    let dark=()=>{
        dark.style.background ="black"
    }
    let light=()=>{
        light.style.background ="white"
    }
  return (
    <div>
        <button onClick={dark}>Dark</button>
        <button onClick={light}>Light</button>
    </div>
  )
}

export default Radiobtnreact
