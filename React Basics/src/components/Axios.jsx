import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {

  let [data, setData]= useState([])
  let [id, setId]= useState(1)

  useEffect (()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
    // console.log(response);
    setData(response.data)
    console.log(response.data);
    })
    .catch((error)=>{
    console.log(error);
    })
  },[id])
  console.log(data);
  return (
    <div>
      {/* {data.map((x)=>{
        return(
          <div>
            {x.id}
            {x.title}
          </div>
        )
      })} */}
      <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/>

      {data.title}
    </div>
  )
}

export default Axios