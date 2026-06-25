import React from 'react'

const Footer = () => {
  return (
   <>
     <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-gray-400 text-sm">
            or continue with
          </span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="flex justify-center gap-4">

          <button
            className="
            w-14
            h-14
            rounded-2xl
            border
            "
          >
          </button>

          <button
            className="
            w-14
            h-14
            rounded-2xl
            border
            "
          >
          </button>

          <button
            className="
            w-14
            h-14
            rounded-2xl
            border
            "
          >
            
          </button>

        </div>

        {/* don't have account */}
        <p className="text-center mt-10 text-sm">
          Don't have an account?
          <a href="" className="text-pink-500  ml-1">
            Sign up
          </a>
        </p>
   </>
  )
}

export default Footer
