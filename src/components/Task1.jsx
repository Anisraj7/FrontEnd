import React, { Component } from 'react'

export class Task1 extends Component {
    constructor(props){
        super(props)

        this.state ={
            name:"",
            id:"",
            sal:"",
            pass:""
        }
    }

    nameData=(f)=>{
        this.setState({
            name:f.target.value
        })
    }

    idData=(f)=>{
        this.setState({
            id:f.target.value
        })
    }

    salData=(f)=>{
        this.setState({
            sal:f.target.value
        })
    }

    passData=(f)=>{
        this.setState({
            pass:f.target.value
        })
    }

    btn=(f)=>{
        f.preventDefault()
        console.log(this.state.name);
        console.log(this.state.id);
        console.log(this.state.sal);
        console.log(this.state.pass);
    }
  render() {
    return (
        <form action="">
        <label htmlFor="">Name</label>
        <input type="text" value={this.state.name} onChange={this.nameData}/><br />
        <label htmlFor="">ID</label>
        <input type="email" value={this.state.id} onChange={this.idData} /><br />
        <label htmlFor="">Salary</label>
        <input type="text" value={this.state.sal} onChange={this.salData} /><br />
        <label htmlFor="">Password</label>
        <input type="text" value={this.state.pass} onChange={this.passData} /><br /><br />
        
        <button onClick={this.btn}>Submit</button>
    </form>
    )
  }
}

export default Task1