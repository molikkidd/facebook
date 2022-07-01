import React from 'react'

function Post({name, message, email, image, postImage, timestamp}) {


  return (
    <div className='flex flex-col'>
        <div>
            <div className='flex items-center space-x-2'>
                <img 
                className='rounded-full'
                src={image} 
                width={40} 
                height={40} 
                alt="postImage" 
                />
                <div>
                   <p className='font-medium'>
                    {name}
                   </p>
                   <p className='text-xs text-gray-400'>
                    {new Date(timestamp?.toDate()).toLocaleString()}
                   </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post