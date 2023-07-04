import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:10
      }
    }
    incre=()=>{
        this.setState({
            count:this.state.count+10
        })
    }

    componentDidMount(){
        console.log("Component got Birth");

    }

    componentDidUpdate(){
        console.log("Component got updated");
    }

  render() {
    console.log("Render Method");

    return (
      <div>
        {this.state.count} <br />
        <button onClick={this.incre}>INCREMENT</button>
      </div>
    )
  }
  componentWillUnmount(){
    // console.log("component is dead");
    alert("Component will be killed")
  }
}
