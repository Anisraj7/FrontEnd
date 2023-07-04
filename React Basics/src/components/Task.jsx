import React, { useState } from 'react'

const Task = () => {
    let [name, setName] = useState("")
    let [id, setId] = useState("")
    let [sal, setSalary] = useState("")
    let [pass, setPassword] = useState("")

    let nameData =(d)=>{
        setName(d.target.value)
    }

    let idData =(d)=>{
        setId(d.target.value)
    }

    let salData =(d)=>{
        setSalary(d.target.value)
    }

    let passData =(d)=>{
        setPassword(d.target.value)
    }

    let handleData =(d)=>{
        d.preventDefault
        console.log(name);
        
    }
  return (
    <form action="">
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} />
        <label htmlFor=""></label>
        <input type="text" value={id} onChange={idData} />
        <label htmlFor=""></label>
        <input type="text" value={sal} onChange={salData} />
        <label htmlFor=""></label>
        <input type="text" value={pass} onChange={passData} /><br /><br />
        <button onClick={handleData}>Submit</button>
    </form>
  )
}

export default Task
