import React from 'react'
import './page.css'
import { BiMoviePlay } from 'react-icons/bi';
import Angelina from '../images/angelina.jpg'
import George from '../images/george-best.png'
import Camera from '../images/camera-image.png'

const Middle = () => {
  return (
    <div className='flex-column bg-[#344d90] items-center justify-center mt-[75px]'>
        <p className='text-xl text-center mb-7 lg:text-3xl lg:my-12 mt-[-20px] pt-8'>Shadowline Media have acquired :</p>

                               {/* FIRST SECTION */}
        <div className='first-section flex-column lg:flex-row items-center justify-center lg:mx-7 md:mt-12 mt-[100px]'>
                
              <div className='first1 flex-column items-center justify-center md:mt-2 lg:mt-[-60px]'>
              <p className='text-[#fff] text-xl md:text-[25px] font-medium text-center lg:my-8'>
                Angelina - Queen of Coffee
                </p>
                <div className='mx-8 mt-2 text-[10px] md:text-base lg:text-base lg:leading-[40px] md:leading-10 leading-6'>
                <p className='flex ml-[-7px] md:ml-[-20px]'><BiMoviePlay className='text-lg mt-2 md:mt-3.5 md:w-16' />
                <span className='px-3 pt-1'>An exclusive contract with Paramount film</span></p>

                <p className='flex ml-[-7px]'><BiMoviePlay className='text-lg mt-2 md:mt-3.5 w-8 md:w-12' />
                <span className='px-3 pt-1'>Attachment of highly sought after Netflix 'Queen Of The South' director Eduardo Sanchez</span></p>

                <p className='flex lg:ml-[-13px]  ml-[-5px] md:ml-[-10px]'><BiMoviePlay className='text-lg mt-2 md:mt-3.5 md:w-12' />
                <span className='mx-3 pt-1 px-3'>Contract with biggest casting agency in South America</span></p>

                <p className='flex ml-[-5px] md:ml-[-25px]'><BiMoviePlay className='text-lg mt-2 md:mt-3.5 md:w-20' />
                <span className='px-3 pt-1'>Attachment of international sales agent</span></p>
              </div>
         </div>
         <div className='first2 flex items-center justify-center my-8'>
                <img className='w-[275px] lg:w-[350px] rounded-md' src={Angelina} alt="Angelina" />
            </div>

 </div>
        <hr className='my-7 mx-0 border-1 lg:mx-12' />

                                 {/* SECOND SECTION */}
         <div className='second-section flex-column items-center justify-center lg:mx-7 md:ml-[-150px]'>
                
              <div className='second1 flex-column items-center justify-center lg:mr-12 md:mr-1'>
              <p className='text-[#fff] text-xl md:text-[28px] font-medium text-center lg:my-5'>
                George Best
                </p>   
                <div className='mx-7 mt-2 text-[10px] leading-6 md:text-base md:leading-10'>
                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5 w-8 md:w-24' />
                <span className='px-3 pt-1'>Exclusive rights to invest in once a lifetime opportunity
                 and be part of the George Best legacy</span></p>

                <p className='flex ml-0.5 md:ml-2.5'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5 w-10 md:w-20' />
                <span className='px-3 pt-1'>Attachment of highly acclaimed Film producer Stephens Evans 
                (The Madness of King George & Confessions of a Dangerous Mind)</span></p>
              </div>
         </div>

            <div className='second2 flex-column items-center justify-center my-8 md:mx-12'>
                <img className='w-[275px] lg:w-[375px] rounded-md mx-10 md:mx-[135px] lg:mx-12 mx-[60px]' src={George} alt="George Best" />
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='button bg-[#f5924c] text-white py-2 px-4 my-5 md:py-5 mx-9 rounded'>
                    Click Here For Your Chance To Invest (Tab To Enquiry Form)
        </button>
        </div>
        {/* <hr className='mt-7 mx-0 border-2 lg:mx-12' />  */}


                                   {/* THIRD SECTION */}
         <div className='third-section flex-column items-center justify-center pt-7 px-3 pb-2 lg:pb-12'>
            <div className='lg:px-[100px]'>
                <p className='text-[#344d90] md:pt-12 text-base md:text-[27px] md:leading-8 font-medium text-center lg:text-center'>
                    As well as being a great investment opportunity you can get some additional perks :
                </p>
               </div>

              <div className='flex-column md:flex-row items-center justify-center md:mx-[75px] lg:ml-[250px]'>
                <div className='mx-7 mt-2 md:mt-8 text-[10px] leading-6 md:text-base md:leading-10'>
                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Film set visits</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Appear as an extra</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Private screenings</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Red carpet events</span></p>

                <p className='flex'><BiMoviePlay className='text-lg mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Name in the credits</span></p>
              </div>
              <div className='flex items-center md:items-start justify-center mt-8 md:mt-[-175px] md:ml-[210px]'>
                <img className='w-[275px] lg:w-[375px] lg:mt-[-35px] rounded-md' src={Camera} alt="camera" />
            </div>
         </div>
            </div>
        <hr className='mb-7 mx-0 border-2' />

    </div>
  )
}

export default Middle