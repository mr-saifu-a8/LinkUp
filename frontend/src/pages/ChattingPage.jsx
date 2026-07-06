import { ArrowLeft, CloudSnow } from 'lucide-react'
import React from 'react'
import Input from '../components/Input'
import Status from '../components/chatUi/Status'
import { Link } from 'react-router-dom'
import Inbox from '../components/chatUi/Inbox'
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import { GrAddCircle } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const ChattingPage = () => {

  const images = [
    {
      name: "Steve",
      imgUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Daisy",
      imgUrl: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Stan",
      imgUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
  ];
  const chatProfiles = [
    {
      profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
      name: "Daisy",
      message: "Hey, are we still on for tomorrow?",
      time: "10:45 AM",
      unreadCount: 2
    },
    {
      profileUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000",
      name: "Starc",
      message: "Finished the project draft, check it out!",
      time: "Yesterday",
      unreadCount: 5
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
      name: "Daisy",
      message: "Hey, are we still on for tomorrow?",
      time: "10:45 AM",
      unreadCount: 2
    },
    {
      profileUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000",
      name: "Starc",
      message: "Finished the project draft, check it out!",
      time: "Yesterday",
      unreadCount: 5
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
      name: "Daisy",
      message: "Hey, are we still on for tomorrow?",
      time: "10:45 AM",
      unreadCount: 2
    },
    {
      profileUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000",
      name: "Starc",
      message: "Finished the project draft, check it out!",
      time: "Yesterday",
      unreadCount: 5
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1596304004522-cb0e975c6039?w=1000",
      name: "Phoenix",
      message: "Can we schedule a quick call?",
      time: "Mon 6:30 PM",
      unreadCount: 0
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      name: "Sophia",
      message: "Loved your presentation today!",
      time: "Wed 2:30 PM",
      unreadCount: 1
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      name: "Sophia",
      message: "Loved your presentation today!",
      time: "Wed 2:30 PM",
      unreadCount: 1
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      name: "Sophia",
      message: "Loved your presentation today!",
      time: "Wed 2:30 PM",
      unreadCount: 1
    },
        {
      profileUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      name: "Sophia",
      message: "Loved your presentation today!",
      time: "Wed 2:30 PM",
      unreadCount: 1
    },
    {
      profileUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      name: "Sophia",
      message: "Loved your presentation today!",
      time: "Wed 2:30 PM",
      unreadCount: 1
    },
    
  ];

  return (
    <div className=' min-w-sm h-auto min-h-auto bg-white p-6 md:p-8 flex justify-center items-center'>
      <div className=' flex flex-col gap-4 md:gap-8 lg:gap-8'>
        {/* navigation  */}
        <nav className='flex justify-between text-2xl '>
          <ArrowLeft  />
          <div className='flex gap-4'>
            <GrAddCircle className=' text-xl md:text-2xl ' />
            <VscDeviceCameraVideo className=' text-xl md:text-2xl ' />
            <PiDotsThreeCircleThin className=' text-xl md:text-2xl ' />
          </div>
        </nav>
        {/* search-bar  */}
        <div className='p-2 rounded-lg bg-gray-100 flex gap-2  '>
          <CiSearch  className=' text-xl md:text-2xl self-center stroke-[1] text-ink-muted ' />
          <input type="text" placeholder='Search' className='text-ink-light outline-none bg-gray-100 placeholder:text-xs md:placeholder:text-sm ' />
        </div>
        {/* stories of friends */}
        <div className='flex flex-col gap-4' >
          <h2 className=' md:text-lg lg:text-xl '>Recently</h2>
          <div className='flex gap-4'>
            {images.map((imgUrl, index) => {
              return <Status {...{ imgUrl}} key={index} />
            })}
          </div>

        </div>
        {/* messages, requests and inbox */}
        <div className='flex flex-col gap-4 '>
          <div className='flex justify-between'>
            <h3 className=' font-medium text-sm lg:text-lg' >Messages</h3>
            <Link to="/login" className=' text-blue-700 font-medium text-sm lg:text-lg' > Requests </Link>
          </div>
          <div className='max-h-[550px] md:max-h-[768px] lg:max-h-[600px]  no-scrollbar overflow-y-auto scroll-smooth min-w-0 flex-1 flex flex-col gap-4' >

          {chatProfiles.map((item, index) => {
            return <Inbox {...{ item: item }} key={index} />
          })}
          </div>

        </div>

      </div>
    </div>
  )
}

export default ChattingPage
