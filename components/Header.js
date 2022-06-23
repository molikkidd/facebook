import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/react'

function Header() {
    const { data: session, status } = useSession()
    

  console.log('session', session, 'status', status)

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'> 
    {/* // LEFT */}
    <div className='flex items-center'>
        <Image
        height={40}
        width={40}
        layout="fixed"
        src="https://links.papareact.com/5me"
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'> 
        <SearchIcon className='h-6 text-gray-600'/>
            <input type="text" 
            placeholder='search facebook' 
            className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            />
        </div>
    </div>
    {/* // CENTER */}
    <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
        </div>
    </div>
    {/* // RIGHT */}
    <div className='flex items-center sm:space-x-2 justify-end'>
        {/* PROFILE PIC */}
        <Image
        onClick={signOut}
        className="cursor-pointer rounded-full"
        src={session.user.image}
        height={40}
        width={40}
        layout="fixed"
        />

        <p className='font-semibold whitespace-nowrap'> {session.user.name}</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
    </div>
    </div>

    
  )
}

export default Header