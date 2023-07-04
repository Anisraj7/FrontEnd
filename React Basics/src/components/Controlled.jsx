import React, { useState } from 'react'

const Controlled = () => {
    let [name, setName] = useState("enter your name")
    let [mail, setMail] = useState("enter your mail")

    let nameData = (n) =>{
        console.log(n.taget);
        setName(n.target.value)
    }

    let mailData = (n) =>{
        setMail(n.target.value)
    }

    let handleData=(n)=>{
        n.preventDefault()
        console.log(name);
        console.log(mail);

    }
  return (
    <div>
        <form action="">
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData}/><br />
        <label htmlFor="">Email</label>
        <input type="email" value={mail} onChange={mailData} /><br />
        <button onClick={handleData}>Submit</button>
        </form>
      
    </div>
  )
}

export default Controlled
