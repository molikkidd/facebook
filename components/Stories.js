import React from 'react'
import StoryCard from './StoryCard'


const stories = [
    {
        name: "Aliko dangote",
        src: "https://image.cnbcfm.com/api/v1/image/105608495-1543947913488aliko.jpg?v=1543948096",
        profile: "https://imageio.forbes.com/specials-images/imageserve/5c33a1554bbe6f7020fb2fd2/0x0.jpg?format=jpg&crop=1909,1909,x865,y206,safe&height=416&width=416&fit=bounds",
    },
    {
        name: "Lebron James",
        src: "https://cdn.vox-cdn.com/thumbor/zxMNYuStmDlS1EpBVax8xhKSNz0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23603593/1239678424.jpg",
        profile: "https://elitetraveler.com/wp-content/uploads/2013/10/LeBron-James-suit-watch.jpg",
    },
    {
        name: "Maverick Cater",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "John H. Clark",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Rich Paul",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
]
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto' >
        {stories.map((story) => (
            <StoryCard 
            key={story.src}
            name={story.name} 
            src={story.src} 
            profile={story.profile}/>
        ))}
    </div>
  )
}

export default Stories