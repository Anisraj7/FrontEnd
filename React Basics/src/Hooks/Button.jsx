import React from 'react'

const Button = (props) => {
    console.log("rendering", props.children);
  return (
    <div>
        <button onClick={props.Func}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button)