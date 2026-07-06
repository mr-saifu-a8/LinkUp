import React from 'react'
import { Mail, EyeOff, Lock, Eye } from 'lucide-react';
import { useState } from 'react';

const Input = (props) => {

  const [error, seterror] = useState({email: "", password: "",});
  const validate = true;

  // console.log({...error});

  // const validate = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   if (props.email) {
  //     if (!emailRegex.test(props.email)) {
  //       seterror({...error, email: "email is invalid", password: ""});
  //     }
  //     else {
  //       seterror({...error, email: ""});
  //     }
  //   }

  //   if (props.password) {
  //     if (!passwordRegex.test(props.password)) {
  //       seterror({...error, email:"" ,password: "email is invalid"});
  //     }
  //     else seterror({...error, password: ""});
  //   }
  //   else seterror({...error, email: "", password: ""});

  // }
  return (
    <form >

      {/* input email & password field ---- */}
      <div className="mt-10 sm:mt-12 space-y-4">

        <div className="relative group">

          <Mail
            size={18}
            className={`absolute left-4 top-1/2  -translate-y-1/2 group-focus-within:text-pink-500 text-gray-400 ${props.email ? "text-gray-900" : "text-gray-400"}`}
          />

          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className="
            
            font-medium
              w-full
              h-14
              rounded-2xl
              bg-gray-100
              pl-12
              
              focus:outline-pink-500 
              focus:outline-3
               focus:bg-pink-50
               focus:
               
              "
            value={props.email}
            onChange={(e) => {
              props.inputHandler(e);
            }}
            onBlur={validate}

          />
          {error.email && <span className='px-4 capitalize text-red-600 font-semibold text-md'> {error.email} </span>}
        </div>
        {/* input password --- show hide feature*/}
        <div className="relative group ">
          <Lock
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-pink-500 text-gray-400 ${props.password ? "text-gray-900" : "text-gray-400"}`}
          />

          <input
            type={!props.showPassword ? "password" : "text"}
            placeholder="Password"
            className="
            font-medium
                w-full
                h-14
                rounded-2xl
                bg-gray-100
                pl-12
                pr-12
      
              focus:outline-pink-500 
                focus:outline-3
              focus:bg-pink-50
                "
            value={props.password}
            onChange={(e) => {
              props.inputHandler(e);
            }}
            name="password"
            onBlur={validate}
          />

          {props.showPassword ? <Eye
            size={20}
            className=" cursor-pointer
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400"
            onClick={() => {
              props.setshowPassword(!props.showPassword)
            }}
          /> : <EyeOff size={20}
            className=" cursor-pointer
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400" onClick={() => {
              props.setshowPassword(!props.showPassword)
            }} />}

          {error.password && <span className='px-4 capitalize text-red-600 font-semibold text-md'> {error} </span>}

        </div>

      </div>

      {/* remember me */}
      <div className="flex justify-center items-center gap-2 mt-5">

        <input type="checkbox" name='remember me' className="cursor-pointer accent-pink-500 w-4 h-4 " />

        <span className="text-sm font-semibold ">
          Remember me
        </span>
      </div>

      {/* signin button */}
      <button type="submit"
        className={` cursor-pointer hover:bg-pink-500
          mt-5
          w-full
          h-14
          rounded-full
          bg-pink-400
          text-white
          font-medium
          shadow-lg
          transition-colors
          ${props.email && props.password ? "bg-pink-500" : "bg-pink-400"}
          `}

        onClick={(e) => {
          props.submitHandler(e);
        }}
      >
        Log in
      </button>
    </form>

  )
}

export default Input
