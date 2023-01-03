import React from 'react'
import './page.css'
import Logo from '../images/logo.png'
import Paramount from '../images/paramount.png'
import { BiMoviePlay } from 'react-icons/bi';

const Head = () => {
  return (
    <div>
                                  {/* NAVBAR */}
        <div className='flex items-center justify-between navbar pb-3 pt-5 px-4 md:px-12 lg:px-[100px] lg:mb-[400px] shadow-md'>
            <img className='w-[150px] md:w-[250px] lg:w-[300px]' src={Logo} alt="logo" />
              <div className='flex items-center justify-between'>
                 <button
                 className='button bg-[#f5924c] text-white text-xs md:text-sm lg:text-base mx-2 md:mx-4 px-2 py-1.5 md:px-4 md:py3 rounded'
                 >
                  <a href="#">ENQUIRE</a>
                   </button>
              </div>
        </div>
                                     {/* INTRO */}
         <div className='intro pt-12 mt-[75px] lg:mt-[115px] md:mt-[105px]' id='Top'>
            <p className='text-sm text-center md:text-base lg:text-lg lg:mx-12 lg:mt-[90px] md:mt-[70px] mt-[75px] md:py-7 
            lg:rounded lg:py-10 lg:leading-10 md:leading-8 bg-[#e3effc] px-5 py-2'>
             Get 50% SEIS income tax relief on two of the most eagerly awaited cinematic releases
             in the coming months The George Best Story and the recently Paramount Pictures backed
             true story of Angelina The Queen of Coffee.
            </p>
         </div>

         <div className='head-intro flex-column items-center justify-center'>
              <div className='intro-1 mx-7 mt-7 lg:mt-[75px] md:mt-[75px] text-[10px] md:text-base md:leading-10 leading-7'>
                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-4' />
                <span className='px-3 pt-1'>HMRC Advance Assured</span></p>

                <p className='flex md:ml-[-5px] lg:ml-[-15px]'><BiMoviePlay className='text-lg mt-1.5 md:mt-4 md:w-12' />
                <span className='px-3 pt-1 lg:px-0'>50% of investment rebated in 2021/22 or 2022/23 tax return</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-4' />
                <span className='px-3 pt-1'>No Capital Gains Tax on growth</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-4' />
                <span className='px-3 pt-1'>CGT Reliefs on investing</span></p>
              </div>

              <div className='intro-2 flex items-center justify-center mt-12 lg:mb-[-45px]'>
                <img className='w-[300px] md:w-[400px]' src={Paramount} alt="paramount pictures" />
              </div>
         </div>
            
            <div className='flex items-center justify-center mt-12 lg:justify-end lg:mt-[-10px] lg:mr-[305px]'>
            <button className='button bg-[#f5924c] md:text-lg text-white py-2 px-4 rounded'>Click Here To See If You Qualify</button>
            </div>

            {/* <hr className='my-7 mx-4 border-2 lg:mt-12 lg:mx-12' /> */}
    </div>
  )
}

export default Head