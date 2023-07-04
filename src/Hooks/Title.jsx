import React from 'react'

const Title = (props) => {
    console.log("Rendering Title");
  return (
    <div>Performence Optimization</div>
  )
}

export default React.memo(Title)