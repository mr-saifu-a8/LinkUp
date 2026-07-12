import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import Status from '../components/chatUi/Status'
import UserProfile from '../components/chatUi/UserProfile';
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Messages from '../components/chatUi/Messages';

const ChatBox = () => {
    const [reply, setreply] = useState("");

    function input(e) {
        const { value } = e.target;
        setreply(value)
    }

    const users = [
        {
            id: 1,
            name: "Alice",
            profileImage: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
        },
        {
            id: 2,
            name: "Bob",
            profileImage: "images/bob.png"
        },
        {
            id: 3,
            name: "Charlie",
            profileImage: "images/charlie.png"
        }
    ];
    const messages = [
        { id: 1, sender: "me", text: "Hello!" },
        { id: 2, sender: "me", text: "Hi 👋" },
        { id: 3, sender: "other", text: "Whats going buddy? I’m making this UI with React for my LinkUp project, it’s not completed yet." },
        { id: 4, sender: "other", text: "I’m fine, what about you?" },
        { id: 5, sender: "me", text: "This is not good UI, I have to make it more minimal and attractive..." },
        { id: 6, sender: "other", text: "Don’t worry, you’ll refine it step by step." },
        { id: 7, sender: "me", text: "Yeah, I’ll try adding Tailwind for styling." },
        { id: 8, sender: "other", text: "Good idea, Tailwind makes layouts faster." },
        { id: 9, sender: "me", text: "I also want to add a profile picture modal when clicked." },
        { id: 10, sender: "other", text: "That would look neat, like WhatsApp or Instagram." },
        { id: 11, sender: "me", text: "Exactly, I’ll use useState to toggle it." },
        { id: 12, sender: "other", text: "Nice, React hooks are powerful." },
        { id: 13, sender: "me", text: "I’ll also map over an array of users to render chat profiles." },
        { id: 14, sender: "other", text: "That’s scalable, you won’t need to hardcode." },
        { id: 15, sender: "me", text: "Do you think I should add animations?" },
        { id: 16, sender: "other", text: "Yes, transitions will make the UI smoother." },
        { id: 17, sender: "me", text: "I’ll try fade‑in/out for the modal." },
        { id: 18, sender: "other", text: "Perfect, Tailwind has transition utilities for that." },
        { id: 19, sender: "me", text: "Thanks, I’ll keep iterating until it feels polished." },
        { id: 20, sender: "other", text: "Looking forward to seeing the final version!" }
    ];


    return (
        <div className=' min-w-sm px-6 flex flex-col h-screen bg-neutral-100 '>
            <nav className='  flex justify-between items-center border-b-2 border-slate-300 py-4 '>
                <UserProfile user={users} />
                <div className="flex gap-6 md:gap-8 text-xl">
                    <Link>
                        <IoCallOutline />
                    </Link>
                    <Link>
                        <IoVideocamOutline />
                    </Link>
                    <Link>
                        <BsThreeDotsVertical />
                    </Link>
                </div>
            </nav>
            <div className='flex-1 py-2 rounded mt-3 overflow-y-auto scroll-smooth no-scrollbar'>

                {messages.map((element, index) => {
                    return <Messages key={index} messages={element} />
                })}

            </div>
            <footer className=' flex  justify-between  items-center py-2 mb-3 '>
                <input placeholder='Type Here...' type="text" value={reply} onChange={
                    (e) => { input(e) }
                } className=' rounded-2xl h-7 w-1/2 border-2 border-pink-300 focus:outline-none px-2 text-sm text-slate-900 bg-pink-50 ' />

                <Link className=' px-2 py-1 md:text-lg rounded-lg  bg-pink-500  text-white ' >Send</Link>
            </footer>

        </div>
    )
}

export default ChatBox
