import React, { useRef } from 'react'

const Ref = () => {
    let demoref = useRef()
    console.log(demoref);
    let btn=()=>{
            demoref.current.style.background ="red"
    }
  return (
    <div>
        <h1 ref={demoref}>HI I am ANISRAJ</h1>

        <button onClick={btn}>click</button>
    </div>
  )
}

export default Ref