import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    let [incre, setIncre] = useState(0)
    let [incre1, setIncre1] = useState(0)

    useEffect(()=>{
        document.title=`incre-${incre} incre1-${incre1}`
        console.log("this is affected");
    },[])     //passing zero arguments as []
    
  return (
    <div>
        {incre}
      <button onClick={()=>{setIncre(incre+10)}}>COUNT</button>
      <br /><br />
      {incre1}
      <button onClick={()=>{setIncre1(incre1+100)}}>COUNT!</button>
    </div>
  )
}

export default Useeffect
