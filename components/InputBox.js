import Image from 'next/image'
import React, { useRef } from 'react'
import {useSession} from 'next-auth/react'
import {VideoCameraIcon, CameraIcon} from '@heroicons/react/solid'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import { db, storage } from '../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Timestamp } from 'firebase/firestore'
function InputBox() {

    const {data: session, status} = useSession();
    const inputRef = useRef(null);
    console.log('app', storage, 'db', db)

    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: Timestamp.now()
        })
       inputRef.current.value = ''; 
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image 
            className='rounded-full'
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"/>

            {/* FORM */}

            <form className="flex flex-1">
                <input 
                type="text" 
                ref={inputRef}
                placeholder={`Whats on your mind, ${session.user.name} ?` }
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                />
                <button hidden type="submit" onClick={sendPost}>
                    Submit
                </button>
            </form>
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            {/* LIVE VIDEO */}
            <div className='inputIcon'>
            <VideoCameraIcon className='h-7 text-red-500'/>
            <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            {/* PHOTOS */}
            <div className='inputIcon'>
            <CameraIcon className='h-7 text-green-500'/>
            <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>

            </div>
            {/*  ACTIVITIES */}
            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300'/>
                <p className='text-xs sm:text-sm'> Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox