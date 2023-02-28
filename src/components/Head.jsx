import React from 'react'
import './page.css'
import Logo from '../images/logo.png'
import Paramount from '../images/paramount.png'
import George from '../images/George.jpeg'
import { BiMoviePlay } from 'react-icons/bi';

const Head = () => {
  return (
    <div>
      {/* NAVBAR */}

        {/* <div className='flex items-center justify-between navbar pb-3 pt-5 px-4 md:px-12 lg:px-[100px] lg:mb-[400px] shadow-md'>
          <div className='flex-col items-start justify-center'>
            <img className='w-[150px] md:w-[250px] lg:w-[300px]' src={Logo} alt="logo" />
            <p className='text-sm lg:text-xl font-medium mt-1 mb-[-5px] py-1 md:pl-3 lg:pl-0 rounded w-[100%]'>
              Sick of making <b>LARGE</b> income tax payments?
            </p>
          </div>
              <div className='flex items-center justify-between'>
                 <button
                 className='button bg-[#262a33] text-[#fff] border-2 text-xs md:text-sm lg:text-base mx-2 md:mx-4 px-2 py-1.5 md:px-4 md:py3 rounded'
                 >
                  <a href="https://form.jotform.com/230065006821343" target="_blank" rel="noreferrer">Enquire</a>
                   </button>
              </div>
        </div> */}

           
          <div className='bg-[#ffff] flex-column items-center justify-center'>

            <p className='text-center text-2xl bg-[#FCF6E3] py-7 px-3 md:px-11 lg:text-4xl lg:py-12 xl:px-20'>
            Tired of <b>LARGE</b> tax bills <b>?</b> <br /> Invest in two of the most eagerly anticipated film releases this year & cut your income tax <b>50%</b>
            </p>
             <div className='flex items-center justify-center'>
               <img className='mt-5 text-center md:w-[38rem] xl:w-[45rem]'
               src={Logo} alt="company logo" />
             </div>

            <div className='first-btn flex justify-center items-center mt-12'>
                <button 
                className='bg-[#262a33] text-[#fff] border-2 mb-7 text-lg md:text-xl lg:text-lg xl:text-3xl mx-2 md:mx-4 px-10 py-2 md:py-2 xl:py-4 xl:px-12 rounded'>
                  <a href="https://form.jotform.com/230065006821343" target="_blank" rel="noreferrer">Enquire</a>
                </button>
            </div>

          </div>

                                        {/* INTRO */}
         <div className='intro flex flex-col md:flex-row items-center justify-center bg-[#FCF6E3] mt-52 mb-56 md:py-7 md:mt-0 md:mb-0 md:px-5 xl:px-10 xl:mb-12 lg:mt-5 lg:mb-0' id='Top'>
              <div className='flex items-center justify-center py-[10px] mt-5 md:w-[50%] lg:py-[50px] lg:px-20'>
                <div className='flex items-center justify-center'>
                 <img className='w-[90%] h-[30rem] md:w-72 md:h-72 lg:w-[400px] lg:h-[550px] mx-3 mt-[6px] mb-7 rounded lg:mx-12' src={George} alt="..." />
                </div>
              </div>
              <div className='flex items-center justify-center md:w-[50%] md:pt-3'>
                  <p className='text-center bg-[#FCF6E3] text-2xl py-7 px-3 mb-7 lg:leading-[55px] lg:text-3xl'>
                   Shadowline have exclusive rights to the George Best story & the recently Paramount Pictures backed <br />
                   <b className='italic'>'Angelina Queen Of Coffee'</b>
                  </p>
              </div>
                   {/* <p className='intro-text text-xl font-medium leading-8 pb-7 px-5 mt-1
                   md:text-lg md:leading-[3rem] md:mt-12 lg:text-3xl lg:mt-[150px] lg:mx-[10px] lg:rounded lg:leading-[3.5rem]'>
                    Get 50% SEIS income tax relief on two of the most eagerly awaited cinematic releases
                    in the coming months. The George Best Story and the recently Paramount Pictures backed
                    true story of Angelina The Queen of Coffee.
                   </p> */}
         </div>

         <div className='head-intro flex-column items-center justify-center'>

              <div className='z-10 intro-1 flex items-center justify-center mt-6 lg:mb-[-45px]'>
                <img className='w-[300px] md:w-[400px]' src={Paramount} alt="paramount pictures" />
              </div>

              <div className='flex-col items-center justify-center mx-12 intro-2 mt-7 lg:mt-[75px] md:mt-[75px] text-[10px] md:text-base md:leading-10 leading-7'>
                <p className='flex my-2'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1 text-lg'>HMRC Advance Assured</span></p>

                <p className='flex my-2 md:ml-[-5px] lg:ml-[-12px]'><BiMoviePlay className='text-4xl md:text-2xl mt-1.5 md:mt-3 md:w-12' />
                <span className='px-3 pt-1 text-lg'>50% of investment rebated in 2022/23 or 2023/24 tax return</span></p>

                <p className='flex my-2'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1 text-lg'>No Capital Gains Tax on growth</span></p>

                <p className='flex my-2'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1 text-lg'>CGT Reliefs on investing</span></p>
              </div>

         </div>
            
         <div className='flex items-center justify-center mt-12 lg:justify-start lg:ml-[305px]'>
            <button className='button bg-[#198754] md:text-lg text-white py-3 px-5 rounded border-none'><a href="https://form.jotform.com/230065006821343" target="_blank" rel="noreferrer">Click Here To See If You Qualify</a></button>
         </div>

    </div>
  )
}

export default Head
