import { Mail, Lock, Eye, EyeOff, ArrowLeft, MoveLeft } from "lucide-react";
import Arrowbutton from "../components/Arrowbutton";
import { Link } from "react-router-dom"
import { useState } from "react";


export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col ">

        {/* back button */}

        <Link to="/auth" >
          <Arrowbutton />
        </Link>


        {/* heading---Login to your account */}
        <h1 className="text-5xl font-bold leading-tight">
          Login to your
          <br />
          Account
        </h1>
        {/* input email & password field ---- */}
        <div className="mt-12 space-y-4">

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="
              w-full
              h-14
              rounded-2xl
              bg-gray-100
              pl-12
              outline-none
              "
              value={email}
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
          </div>
          {/* input password --- show hide feature*/}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Password"
              className="
              w-full
              h-14
              rounded-2xl
              bg-gray-100
              pl-12
              pr-12
              outline-none
              "
              value={password}
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />

            {showPassword ? <Eye
              size={20}
              className=" cursor-pointer
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400"
              onClick={() => {
                setshowPassword(!showPassword)
              }}
            /> : <EyeOff size={20}
              className=" cursor-pointer
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400" onClick={() => {
                setshowPassword(!showPassword)
              }} />}


          </div>

        </div>

        {/* remember me */}
        <div className="flex justify-center items-center gap-2 mt-5">
          <input type="checkbox" className="cursor-pointer" />
          <span className="text-sm font-semibold ">
            Remember me
          </span>
        </div>

        {/* signin button */}
        <button
          className=" cursor-pointer hover:bg-pink-500
          mt-5
          w-full
          h-14
          rounded-full
          bg-pink-400
          text-white
          font-medium
          shadow-lg
          "
        >
          Log in
        </button>

        {/* forgot password */}
        <a href="" className="text-center mt-4 text-pink-500">
          Forgot the password?
        </a>

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
           google
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

      </div>
    </div>
  );
}