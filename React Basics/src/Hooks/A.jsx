import React, { createContext } from 'react'
import B from './B'

// const A = () => {
//   return (
//     <div>
//         <B data="ANISH RAJ"/>
//     </div>
//   )
// }

export let User= createContext()

const A = () => {
    return (
        <User.Provider value="anis">
            <B/>
        </User.Provider>
    )
  }

export default A