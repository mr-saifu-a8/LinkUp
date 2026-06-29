import { Mail, Lock, Eye, EyeOff, ArrowLeft, MoveLeft } from "lucide-react";
import Arrowbutton from "../components/Arrowbutton";
import { Link } from "react-router-dom"
import { useState } from "react";
import Input from "../components/Input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Forgot_password from "../components/Forgot_password";


export default function Login() {

 console.log(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") setemail(value);
    if (name === "password") setpassword(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
  }

  // grouping props into an object 
  const Inputprops = {
    email,
    password, showPassword, setshowPassword, inputHandler, submitHandler
  }

  return (
    <div className="min-h-screen bg-white flex  justify-center px-6 md:p-8 items-center">
      <div className="w-full max-w-sm  flex flex-col ">

        {/* back button */}

        <Link to="/signup" >
          <Arrowbutton />
        </Link>


        {/* heading---Login to your account */}
        <Header title="Login to your" subtitle="Account" />

        {/* Input field----email---password---- */}
        <Input {...Inputprops} />

        {/* forgot password */}
        <Forgot_password />

        <Footer {...{ title: "Don't have an account?", tag: "Sign up" }} />

      </div>
    </div>
  );
}