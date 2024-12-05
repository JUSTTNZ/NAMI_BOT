import { useContext, useState } from 'react'
import {assets} from '../../assets/assets/assets.js'
import './Sidebar.css'
import { Context } from '../../Context/Context.jsx';
const Nzsidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar hidden  md:inline-flex md:flex-col md:justify-between md:h-[100vh] md:bg-[#f0f4f9] md:py-6 md:px-3.5'>
        <div className=''>
            <img onClick={() => setExtended(prev=>!prev)} className='block ml-2.5 cursor-pointer' src={assets.menu_icon} alt="" />
            <div onClick={() => newChat()} className='mt-12 inline-flex items-center gap-2.5 px-3.5 py-3.5 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer'>
                <img  src={assets.plus_icon} alt="" />
                {extended? <p className=''>New Chat</p>: null}
            </div>
            {extended? <div className='recent flex flex-col'>
                <p className='mt-8 mb-5'>Recent</p>
                {prevPrompt.map((item,index) => {
                  return (
                      <div key={index}  onClick={()=>loadPrompt(item)} className='flex cursor-pointer items-center gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]'>
                          <img src={assets.message_icon} alt="" />
                          <p  className=''>{item.slice(0,18)}...</p>
                      </div>
                    )
                }  
                )}
                
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



