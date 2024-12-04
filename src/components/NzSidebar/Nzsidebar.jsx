import { useState } from 'react'
import {assets} from '../../assets/assets/assets.js'
import './Sidebar.css'
const Nzsidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar inline-flex flex-col justify-between h-screen bg-[#f0f4f9] py-6 px-3.5'>
        <div className=''>
            <img onClick={() => setExtended(prev=>!prev)} className='block ml-2.5 cursor-pointer' src={assets.menu_icon} alt="" />
            <div className='mt-12 inline-flex items-center gap-2.5 px-3.5 py-3.5 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer'>
                <img src={assets.plus_icon} alt="" />
                {extended? <p className=''>New Chat</p>: null}
            </div>
            {extended? <div className='flex flex-col'>
                <p className='mt-8 mb-5'>Recent</p>
                <div className='flex items-center gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]'>
                    <img src={assets.message_icon} alt="" />
                    <p className=''>What is React...</p>
                </div>
            </div>: null }
            
        </div>
      <div className='flex flex-col'>
        <div className='flex items-center gap-2.5 p-2.5 pr-10  cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]'>
            <img src={assets.question_icon} alt="" />
            {extended? <p>Help</p>: null}
        </div>
        <div className='flex items-center gap-2.5 p-2.5 pr-10  cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]'>
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className='flex items-center gap-2.5 p-2.5 pr-10 cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]'>
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}
export default Nzsidebar



