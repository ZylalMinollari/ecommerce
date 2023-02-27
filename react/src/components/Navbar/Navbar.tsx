import React from 'react'

type NavbarData = {
  name : string
}

const Navbar = (props : NavbarData) => {
  return (
    <div>{props.name}</div>
  )
}

export default Navbar