import React from 'react'

const Inbox = ( item ) => {
    const { profileUrl, name, message, unreadCount, time } = item.item;
    return (
        <div className=' flex gap-4 items-center min-w-0 '>
            {/* Pfp */}
            <img src= {profileUrl} alt="ProfileImg" className='rounded-full object-cover w-[72px] h-[60px] ' />
            <div className=' flex justify-between w-full '>
                {/* name of contact and Recent messages received */}
                <div>
                    <h2 className=' text-md md:text-lg  '> {name} </h2>
                    <span className='text-gray-500 text-xs md:text-sm' > {message} </span>
                </div>
                {/* unread message count and time of the message received  */}
                <div className=' flex flex-col' >
                    <div className=' rounded-full self-end bg-red-400 mb-2 w-6 h-6 flex justify-center items-center text-white '> {unreadCount} </div>
                    <span className=' text-gray-500 text-xs' > {time} </span>
                </div>
            </div>
        </div>
    )
}

export default Inbox
