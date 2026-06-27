import React from 'react'

const Logo = (props) => {

    return (
        <>
            <a href="" className='flex justify-center items-center 
                w-20
                h-14
                rounded-2xl
                border-2
                border-gray-100
                '>
                <img src={props.logo} alt="facebook-log" className='h-9 w-9' />
            </a>
        </>
    )
}

export default Logo
