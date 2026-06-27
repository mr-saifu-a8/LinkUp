import React from 'react'
import Logo from './Logo'
import applelogo from "../assets/apple.svg"
import googlelogo from "../assets/google.svg"
import facebooklogo from "../assets/facebook.svg"

const Footer = ({title, tag}) => {

  return (
   <>
     <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-500 font-medium text-md">
            or continue with
          </span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="flex justify-center gap-9">

            <Logo logo = { googlelogo } />
            <Logo logo = { facebooklogo } />
            <Logo logo = { applelogo } />

        </div>

        {/* don't have account */}
        <p className="text-center mt-10 text-md text-gray-400">
            {title}
          <a href="" className="text-pink-500  ml-1">
            {tag}
          </a>
        </p>
   </>
  )
}

export default Footer
