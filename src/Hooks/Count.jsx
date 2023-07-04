import React from 'react'

const Count = (props) => {
    console.log("rendering", props.children);
  return (
    <div>
        {props.children}-{props.data}
    </div>
  )
}

export default React.memo(Count)