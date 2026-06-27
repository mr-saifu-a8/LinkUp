import { Mail, Lock, Eye, EyeOff, ArrowLeft, MoveLeft } from "lucide-react";
import Arrowbutton from "../components/Arrowbutton";
import { Link } from "react-router-dom"
import { useState } from "react";
import Input from "../components/Input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Forgot_password from "../components/Forgot_password";


export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const inputHandler = (e) => {
    const elem = e.target.name;
    const value = e.target.value;

    if (elem === "email") setemail(value);
    if (elem === "password") setpassword(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email ${email}`);
    console.log(`password ${password}`);
    setemail("");
    setpassword("");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col ">

        {/* back button */}

        <Link to="/auth/signup" >
          <Arrowbutton />
        </Link>


        {/* heading---Login to your account */}
        <Header title="Login to your" subtitle="Account" />

        {/* Input field----email---password---- */}
        <Input email={email} password={password} showPassword={showPassword} inputHandler={inputHandler} showPassword={showPassword} setshowPassword={setshowPassword} submitHandler={submitHandler} />

        {/* forgot password */}
        <Forgot_password />

        <Footer {...{title: "Don't have an account?", tag: "Sign up"}} />

      </div>
    </div>
  );
}