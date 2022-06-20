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

function Header() {
  return (
    <div> 
    {/* // LEFT */}
    <div className='flex items-center'>
        <Image
        height={40}
        width={40}
        layout="fixed"
        src="https://links.papareact.com/5me"
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'> 
        <SearchIcon className='h-6'/>
            <input type="text" 
            placeholder='search facebook' 
            className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500'
            />
        </div>
    </div>
    {/* // CENTER */}
    {/* // RIGHT */}
    
    </div>

    
  )
}

export default Header