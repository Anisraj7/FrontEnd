import React, { useContext } from 'react'
import { User } from './A'

// const C = (props) => {
//   return (
//     <div>
//         I am a Component of C <br />
//         {props.data1}
//     </div>
//   )
// }

const C = () => {
    let userdata= useContext(User)
    return (
      <div>
          I am a Component of C <br />
          {userdata}
      </div>
    )
  }

export default C