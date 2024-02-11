import React from 'react'
import logo from '../assets/logo.jpeg'
import bgVideo from '../assets/bgVideo.mp4'

const Page = () => {
  return (
    <div className='relative h-screen'>
      <div className='absolute inset-0 overflow-hidden'>
        <video className='object-cover w-screen h-screen' autoPlay muted loop>
          <source src={bgVideo} type='video/mp4' />
        </video>
      </div>
      <div className='relative z-10 flex flex-col px-24 py-6'>
        <div className='h-16 w-full gap-2 flex  items-center mt-2 flex-start px-4 py-4 mb-4'>
          <img
            src={logo}
            className='w-24'
          />
          <span className='font-bold text-white text-xl'>CiPE</span>
        </div>

        <form className='flex flex-col'>
          <div className='flex justify-end gap-12'>
            <div>
              <label className='text-white text-xl' htmlFor="Age">Age :</label>
              <input type="text" className='h-12 w-24 px-2 outline-none bg-[#a9cfe6] border-none ml-2 mr-10' />
            </div>
            <div>
              <label className='text-white text-xl' htmlFor="Gender">Gender :</label>
              <input type="text" className='h-12 w-24 px-2 outline-none bg-[#a9cfe6] border-none ml-2 mr-10' />
            </div>
            <div>
              <label className='text-white text-xl' htmlFor="Ethnicity">Ethnicity :</label>
              <input type="text" className='h-12 w-24 px-2 outline-none bg-[#a9cfe6] border-none ml-2 mr-10' />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex gap-24 py-10'>
              <div className='flex flex-col w-[30vw] gap-6 '>
                <label className='text-2xl text-white mt-2 uppercase' htmlFor="Diseases">Diseases&nbsp;:</label>
                <label className='text-2xl text-white mt-2 uppercase' htmlFor="Prescriptions">Prescriptions&nbsp;:</label>
                <label className='text-2xl text-white mt-2 uppercase' htmlFor="Additional Info">Additional Info:</label>
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <input type="text" className='h-12 px-2 outline-none bg-[#a9cfe6] border-none ' />
                <input type="text" className='h-12 px-2 bg-[#a9cfe6] outline-none border-none ' />
                <input type="text" className='h-12 px-2 bg-[#a9cfe6] outline-none border-none ' />
              </div>
            </div>
            <div className='flex mt-6 justify-between w-full'>
              <button className='bg-[#6A6CFF] ml-6 rounded-lg px-6 py-2 text-white'>Predict Drug Effects</button>
              <button className='bg-[#52A0D1] font-bold text-white py-2 px-4 sm:px-12 mt-2 sm:mt-0 w-full sm:w-auto'>CLICK!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page