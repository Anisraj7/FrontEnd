import React, { useRef } from 'react'

const Uncontrolled = () => {
    let name=useRef()
    let mail=useRef()
    console.log(name);
    console.log(mail);

    let handledata =(e)=> {
        e.preventDefault()
        let username = name.current.value
        let usermail = mail.current.value
        console.log(username);
        console.log(usermail);

    }

  return (
    <div>
      <form action="">
        <label htmlFor="#">Name</label>
        <input type="text" ref={name} /><br />
        <label htmlFor="#">Email</label>
        <input type="email" ref={mail}/><br />
        <button onClick={handledata}>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
