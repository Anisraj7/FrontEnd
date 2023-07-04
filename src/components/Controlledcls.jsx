import React, { Component } from 'react'

export class Controlledcls extends Component {
    constructor(props){
        super(props)

        this.state ={
            name:"",
            email:"@gmail.com"
        }
    }

    namedata=(f)=>{
        this.setState({
            name:f.target.value
        })
    }

    emaildata=(f)=>{
        this.setState({
            email:f.target.value
        })
    }

    btn=(f)=>{
        f.preventDefault()
        console.log(this.state.name);
        console.log(this.state.email);
    }
  render() {
    return (
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" value={this.state.name} onChange={this.namedata}/><br />
            <label htmlFor="">Email</label>
            <input type="email" value={this.state.email} onChange={this.emaildata} />
            <button onClick={this.btn}>Submit</button>
        </form>
      
    )
  }
}

export default Controlledcls