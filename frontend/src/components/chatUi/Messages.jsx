import { CloudSnow } from 'lucide-react'
import React from 'react'

const Messages = ( props ) => {
    const { id, sender, text } = props.messages;
    return (
        <div className= {` flex flex-col  rounded  ${sender === "other" ? "items-start mb-1" : "items-end mb-1" } `}>
            <small className=' bg-pink-300 max-w-[12rem] md:max-w-xs px-2 py-2 rounded-lg '> {text} </small>
            <small className='text-xs text-slate-500 mt-1 ' >2:00 AM</small>
        </div>
    )
}

export default Messages
