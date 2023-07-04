import React, { useMemo, useState } from 'react'

const Usemem = () => {
    let [count1, setCount1]=useState(0)
    let [count2, setCount2]=useState(0)

    let Even=useMemo(()=> {
        let i=0
        while(i<1000000) i++
        console.log(i);
        return count1%2 ===0
    },[count1])
  return (
    <div>
        {count1}
        <button onClick={()=>{setCount1(count1+1)}}>Increment1</button> <br />
        {Even?"Even":"Odd"} <br />
        {count2}
        <button onClick={()=>{setCount2(count2+1)}}>increment2</button>
      
    </div>
  )
}

export default Usemem
