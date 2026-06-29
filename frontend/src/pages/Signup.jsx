import React from 'react'
import Arrowbutton from '../components/Arrowbutton'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Input from '../components/Input'
import { useState } from 'react'
import Footer from '../components/Footer'

const Signup = () => {
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
        <div className="min-h-screen bg-white flex items-center justify-center px-6 md:px-8" >
            <div className="w-full max-w-sm flex flex-col " >

                <Link to="/login" >
                    <Arrowbutton />
                </Link>

                <Header title="Create your" subtitle={"Account"} />


                <Input {...Inputprops} />

                <Footer  {...{ title: "Already have an account?", tag: "Sign in" }} />
            </div>
        </div>
    )
}

export default Signup