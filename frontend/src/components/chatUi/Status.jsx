import React from 'react'
import { Link } from 'react-router-dom'

const Status = ( props ) => {
    const { name, imgUrl } = props.imgUrl;
    return (
        <div className="flex flex-col items-center ">
            <Link className=''>
                <img src= { imgUrl } className='w-[70px] h-[70px] rounded-full border-4 border-pink-300 ' alt="" />
            </Link>
            <h3 className='text-sm ' > { name } </h3>
        </div>
    )
}

export default Status
