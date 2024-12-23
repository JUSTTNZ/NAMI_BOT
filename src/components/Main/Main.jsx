import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex items-center justify-between text-xl p-5 text-[#585858]'>
       <p class="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-red-500 text-4xl font-bold animate-gradient-shine">
  NZ-BOT
</p>
        <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className='max-w-[900px] m-auto'>
        {!showResult ? 
        <>
        <div className='my-8 mx-0 text-6xl text-[#c4c7c5] font-medium p-5'>
            <p><span className='greet-span'>Hello,Genius</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className='cards mb-[60px]'>
            <div className='md:h-[200px] h-[100px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea' >Suggest beautiful places to see on an upcoming road trip</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.compass_icon} alt="" />
            </div>
            <div className='md:h-[200px] h-[100px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea'>Briefly summarize this concept: urban planning</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.bulb_icon} alt="" />
            </div>
            <div className='md:h-[200px] h-[100px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858] hover:text-[#dfe4ea'>Brainstorm team bonding activities for our work retreat</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.message_icon} alt="" />
            </div>
            <div className='md:h-[200px] h-[100px] p-3.5 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                <p className='text-[17px] text-[#585858]' >Improve the readability of the following code</p>
                <img className='w-9 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5' src={assets.code_icon} alt="" />
            </div>
        </div>
        </> :
        <div className='result py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
          <div className='my-10 flex items-center gap-5'>
            <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='flex items-start gap-5'>
            <img className='hidden md:block'src={assets.gemini_icon} alt="" />
            {loading? 
              <div className=' loader w-full flex flex-col gap-2.5'>
                <hr className=''/>
                <hr className=''/>
                <hr className=''/>
              </div>
              :
              <p className=' result  leading-loose ' dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
        </div>
        }
        
        <div className='absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto'>
            <div className='flex items-center justify-between gap-5 bg-[#f0f4f9] py-2.5 px-5 rounded-full '>
                <input onChange={(e) => setInput(e.target.value)} value={input} className='md:flex-1 bg-transparent rounded-none outline-none md:p-2 md:text-lg flex-none w-[150px]' type="text" placeholder='Type your question'/>
                <div className='flex md:space-x-3 space-x-2'>
                    <img className='md:w-6 w-5 cursor-pointer' src={assets.gallery_icon} alt="" />
                    <img className='md:w-6 w-5 cursor-pointer' src={assets.mic_icon} alt="" />
                    {
                      input ? <img onClick={() => onSent()} className='md:w-6 w-5 cursor-pointer' src={assets.send_icon} alt="" /> : null
                    }
                    
                </div>
            </div>
            <p className='text-sm my-3.5 mx-auto text-center font-light'>NZ may display inaccurate info, including about people,so double-check its responses. Your privacy and Nami Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
