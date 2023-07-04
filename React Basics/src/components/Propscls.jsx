import { components } from "react";

class Propscls extends components{
    render(){
        console.log(this.props);
        return(
            <h1>HII{this.props.abc}</h1>
        )
    }
}
export default Propscls