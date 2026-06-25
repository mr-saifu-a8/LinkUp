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
        <div className="min-h-screen bg-white flex items-center justify-center px-6" >
            <div className="w-full max-w-sm flex flex-col " >

                <Link to="/auth/login" >
                    <Arrowbutton />
                </Link>

                <Header title="Create your" subtitle={"Account"} />


                <Input email={email} password={password} showPassword={showPassword} inputHandler={inputHandler} showPassword={showPassword} setshowPassword={setshowPassword} submitHandler={submitHandler} />

                <Footer />
            </div>
        </div>
    )
}

export default Signup