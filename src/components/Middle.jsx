import React, { useEffect } from 'react'
import './page.css'
import { BiMoviePlay } from 'react-icons/bi';
import Angelina from '../images/angelina.jpg'
import George from '../images/george-best.png'
import Camera from '../images/camera-image.png'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const firstSection = {
  visible: { y: 0, opacity: 1, type: "tween", ease: "linear", transition: { duration: 1 } },
  hidden: { y: '200px', opacity: 0 }
};

const Middle = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className='flex-column bg-[#fff1e5] items-center justify-center mt-[75px]'>
        <p className='text-xl text-center mb-7 md:text-2xl lg:text-3xl lg:my-12 mt-[-20px] pt-12'>Shadowline Media have acquired :</p>

                               {/* FIRST SECTION */}
        <motion.div 
        ref={ref}
        variants={firstSection}
        initial="hidden"
        animate={control}
        className='first-section flex-column lg:flex-row items-center justify-center lg:mx-[70px] md:mt-12 mt-[100px]'>
                
              <div className='first1 flex-column items-center justify-center md:mt-2 lg:mt-[-60px] lg:ml-12'>
              <p className='text-[#262a33] text-xl md:text-[25px] font-medium text-center lg:my-8 lg:text-3xl lg:font-bold'>
                Angelina - Queen of Coffee
                </p>

                <ul className='mt-2 mx-[30px] text-[10px] md:text-base lg:text-base lg:leading-8 md:leading-6 leading-4'>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-xl md:text-3xl' /><span className='px-2'>An Exclusive contract with Paramount Pictures</span></li>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-[30px] md:text-[67px] lg:text-[43px]' /><span className='px-2'>Attachment of highly sought after Netflix 'Queen Of The South' director Eduardo Sanchez</span></li>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-xl md:text-[42px] lg:text-[30px]' /><span className='px-2'>Contract with biggest casting agency in South America</span></li>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-xl md:text-3xl' /><span className='px-2'>Attachment of international sales agent</span></li>
                </ul>
         </div>
         <div className='first2 flex items-center justify-center my-8'>
                <img className='w-[275px] lg:w-[350px] rounded-md' src={Angelina} alt="Angelina" />
            </div>
        </motion.div>

        <hr className='hr-line my-7 lg:mx-12' />

                                 {/* SECOND SECTION */}
         <div className='second-section flex-column items-center justify-center lg:mx-[55px] md:ml-[-150px]'>

              <div className='second1 flex-column items-center justify-center lg:mr-12 md:mr-1'>
              <p className='text-[#262a33] text-xl md:text-[28px] font-medium text-center lg:my-5 lg:text-3xl lg:font-bold'>
                George Best
                </p>   

                <ul className='mt-2 mx-[30px] text-[10px] md:text-base lg:text-base lg:leading-[40px] md:leading-10 leading-4'>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-4xl md:text-[67px] lg:text-[50px]' /><span className='px-2'>Exclusive rights to invest in 
                 the George Best drama feature film and become part of his legacy</span></li>
                <li className='flex items-center py-2 lg:py-4'><BiMoviePlay className='text-[51px] md:text-[95px] lg:text-[70px]' /><span className='px-2'>Attachment of highly acclaimed Film producer Stephens Evans 
                (The Madness of King George & Confessions of a Dangerous Mind)</span></li>
                </ul> 

         </div>

            <div className='second2 flex-column items-center justify-center my-8 md:mx-12'>
                <img className='w-[275px] lg:w-[375px] rounded-md mx-10 md:mx-[135px] lg:mx-12 mx-[60px]' src={George} alt="George Best" />
            </div>
        </div>

        <div className='flex items-center justify-center'>
        <button className='button bg-[#262a33] text-white py-2 px-4 my-5 md:py-5 mx-9 rounded'>
                    <a href="https://form.jotform.com/230065006821343" target="_blank">Click Here For Your Chance To Invest (Tab To Enquiry Form)</a>
        </button>
        </div>
        {/* <hr className='mt-7 mx-0 border-2 lg:mx-12' />  */}


                                   {/* THIRD SECTION */}
         <div className='third-section flex-column items-center justify-center pt-7 px-3 pb-2 lg:pb-12'>
            <div className='lg:px-[100px]'>
                <p className='text-[#262a33] md:pt-12 text-base md:text-[27px] md:leading-8 font-medium text-center lg:text-center'>
                    As well as being a great investment opportunity you can get some additional perks :
                </p>
               </div>

              <div className='flex-column md:flex-row items-center justify-center md:mx-[75px] md:mb-12 lg:ml-[250px]'>
                <div className='mx-7 mt-2 md:mt-8 text-[10px] leading-6 md:text-base md:leading-10'>
                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Film set visits</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Appear as an extra</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Private screenings</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Red carpet events</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1'>Name in the credits</span></p>
              </div>
              <div className='flex items-center md:items-start justify-center mt-8 mb-5 md:mt-[-175px] md:ml-[210px]'>
                <img className='w-[275px] lg:w-[375px] lg:mt-[-35px] rounded-md' src={Camera} alt="camera" />
            </div>
         </div>
            </div>
        <hr className='hr-line mb-7' />

    </div>
  )
}

export default Middle
