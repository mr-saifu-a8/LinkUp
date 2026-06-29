import React from 'react'

const Header = ({title, subtitle}) => {
  
  return (
    <h1 className="text-5xl font-bold leading-tight">
      {title}
      <br />
       {subtitle}
    </h1>
  )
}

export default Header
