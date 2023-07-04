import React, { Component } from 'react'

export class Uncontrolledcls extends Component {
    constructor(props){
    super(props)

    this.name = React.createRef()
    this.phone = React.createRef()
}
btn=()=>{
    let username = this.name.current.value
    let mobile = this.phone.current.value
    console.log(username);
    document.write(username)

}
  render() {
    console.log(this.name);
    return (
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" ref={this.name} />
            <label htmlFor="">Phone</label>
            <input type="text" ref={this.phone}/>
            <button onClick={this.btn}>Submit</button>
        </form>
      
    )
  }
}

export default Uncontrolledcls