import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
const Main = () => {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex items-center justify-between text-xl p-5 text-[#585858]'>
        <p>NZ</p>
        <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className='max-w-[900px] m-auto'>
        <div className='my-12 mx-0 text-6xl text-[#c4c7c5] font-medium p-5'>
            <p><span className='greet-span'>Hello, Dev.</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className='cards mb-[120px]'>
            <div className='h-[200px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea' >Suggest beautiful places to see on an upcoming road trip</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.compass_icon} alt="" />
            </div>
            <div className='h-[200px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea'>Briefly summarize this concept: urban planning</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.bulb_icon} alt="" />
            </div>
            <div className='h-[200px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea'>Brainstorm team bonding activities for our work retreat</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.message_icon} alt="" />
            </div>
            <div className='h-[200px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858]' >Improve the readability of the following code</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className='relative bottom-0 w-full max-w-[900px] py-0 px-5 m-auto'>
            <div className='flex items-center justify-between gap-5 bg-[#f0f4f9] py-2.5 px-5 rounded-full '>
                <input className='flex-1 bg-transparent rounded-none outline-none p-2 text-lg' type="text" placeholder='Type your question'/>
                <div className='flex space-x-3'>
                    <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
                    <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="" />
                    <img className='w-6 cursor-pointer' src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='text-sm my-3.5 mx-auto text-center font-light'>NZ may display inaccurate info, including about people,so double-check its responses. Your privacy and Nami Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
