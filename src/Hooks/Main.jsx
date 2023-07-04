import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const Main = () => {
    let [Age,setAge]=useState(25)
    let [Salary,setSal]=useState(25000)

    // let incAge=()=>{setAge(Age+1)}
    // let incSal=()=>{setSal(Salary+5000)}

    let incAge= useCallback(()=>{
        setAge(Age+1)
    },[Age])

    let incSal= useCallback(()=>{
        setSal(Salary+5000)
    },[Salary])
  return (
    <div>
        <Title/>
        {/* <Count><h1>PROPS Chlidren</h1></Count>
        <Button/>
        <Count/> */}

        <Count data={Age}>Age</Count>
        <Button Func={incAge}>incrementAge</Button>
        <Count data={Salary}>Salary</Count>
        <Button Func={incSal}>incremented Salary</Button>
    </div>
  )
}

export default Main