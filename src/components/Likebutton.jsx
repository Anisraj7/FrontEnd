import React, { useState } from "react"

const Likebutton=()=>{

    let[count,setCount]=useState(0)

    let like=()=>{
        setCount(count+1)
    }

    return(
        <div>

            
            <i class="fa-sharp fa-solid fa-thumbs-up"><sub onClick={like}></sub></i>
            
        </div>
    )
}
export default Likebutton


