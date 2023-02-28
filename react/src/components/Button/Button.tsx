import React from 'react'

type ButtonProps = {
    handleClick: () => void
}


function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>Click ME</button>
  )
}

export default Button