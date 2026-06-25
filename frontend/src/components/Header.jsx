import React from 'react'

const Header = (props) => {
  return (
    <h1 className="text-5xl font-bold leading-tight">
      {props.title}
      <br />
       {props.subtitle}
    </h1>
  )
}

export default Header
