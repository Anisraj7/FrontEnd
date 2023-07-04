import { useState } from "react";

const Hoc1=(WrappedComp)=>{
    function Hoc(){

        let [incre,setIncre] = useState(0)
    
        let clk =() =>{
            setIncre(incre+77)
        }
        return(
            <div>
                <WrappedComp data={incre} Func={clk}/>
            </div>
        )
    }
    return Hoc

}

export default Hoc1