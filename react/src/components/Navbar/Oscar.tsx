import React from 'react'

type OscarData = {
    styles : React.CSSProperties
}

const Oscar = (props : OscarData) => {
  return (
    <div style={props.styles}>Text goes here</div>
  )
}

export default Oscar