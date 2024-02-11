import React from 'react'
import logo from '../assets/logo.jpeg'
import bgVideo from '../assets/bgVideo.mp4'

const Page = () => {
  return (
    
    <div className='relative w-screen h-screen px-8 md:px-16 py-4'>
      <div className='absolute inset-0 overflow-hidden'>
        <video className='object-cover w-screen h-screen' autoPlay muted loop>
          <source src={bgVideo} type='video/mp4' />
        </video>
      </div>
      <div className='relative z-10 flex mx-auto flex flex-col'>
        <div className='flex items-center gap-2 text-3xl font-bold'>
          <img
            src={logo}
            className='w-24'
          />
          <span className='text-white'>CiPE</span>
        </div>

        <div className='flex flex-col md:flex-row mt-2 gap-6'>
          <div className='flex flex-col text-2xl h-30 w-full md:w-1/2'>
            <span className='text-white'>BENEFITS:</span>
            <div className='bg-[#A9CFE6] gap-2 w-full flex flex-col h-full p-6 '>
              <span className='font-bold text-xl'>1.</span>
              <span className='font-bold text-xl'>2.</span>
              <span className='font-bold text-xl'>3.</span>
            </div>
          </div>
          <div className='flex flex-col text-2xl h-30 w-full md:w-1/2'>
            <span className='text-white'>SIDE EFFECTS:</span>
            <div className='bg-[#A9CFE6] gap-2 w-full flex flex-col h-full p-6 '>
              <span className='font-bold text-xl'>1.</span>
              <span className='font-bold text-xl'>2.</span>
              <span className='font-bold text-xl'>3.</span>
            </div>
          </div>
        </div>

        <div className='flex mt-4 md:mt-2 flex-col text-2xl h-30 w-full'>
          <span className='text-white'>SUGGESTIONS:</span>
          <div className='bg-[#A9CFE6] gap-2 w-full flex flex-col h-full p-6 '>
            <span className='font-bold text-xl'>1.</span>
            <span className='font-bold text-xl'>2.</span>
            <span className='font-bold text-xl'>3.</span>
          </div>
        </div>

        <div className='mt-4 flex flex-col sm:flex-row justify-between'>
          <span className='text-white italic w-full sm:w-[50vw] font-bold text-center sm:text-left'>
            Disclaimer: CiPE is a healthcare recommender system based on 10 years of medical databasee. Please meet your medical professionals for more details.
          </span>
          <button className='bg-[#52A0D1] font-bold text-white py-2 px-4 sm:px-12 mt-2 sm:mt-0 w-full sm:w-auto'>
            SEND!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page