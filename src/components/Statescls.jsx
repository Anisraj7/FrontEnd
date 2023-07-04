import React, { components } from 'react';

export default class Statescls extends components {
    constructor(props){
        super(props)

        this.state={
            count:"Hungry"
        }
        
        btn=()=>{
            this.setState({
                count:"i am full"
            })
        }
    }
  render() {
    return (
      <div>
        {this.state.count}

        <button onClick={this.btn}></button>
      </div>
    )
  }
}
