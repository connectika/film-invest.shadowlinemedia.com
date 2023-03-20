import React, { useEffect } from 'react'
import './page.css'
import { BiMoviePlay } from 'react-icons/bi';
import Angelina from '../images/angelina.jpg'
import Angelina3 from '../images/angelina3.jpg'
// import George from '../images/george-best.png'
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

           <div className='first1 flex-column items-center justify-center lg:mr-12 md:mr-1'>
                  <p className='text-[#262a33] text-3xl md:text-[28px] font-medium text-center lg:my-5 lg:text-3xl lg:font-bold'>
                  George Best
                  </p>   

                  <ul className='mt-2 mx-[30px] text-[10px] md:text-base lg:text-base lg:leading-8 md:leading-6 leading-4'>
                    <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-[50px] md:text-3xl' /><span className='px-2 text-base'>Exclusive rights to invest in 
                     the George Best drama feature film and become part of his legacy</span></li>
                    <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-[75px] md:text-[67px] lg:text-[43px]' /><span className='px-2 text-base'>Attachment of highly acclaimed Film producer Stephens Evans 
                    (The Madness of King George & Confessions of a Dangerous Mind)</span></li>
                    <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-[50px] md:text-[42px] lg:text-[30px]' /><span className='px-2 text-base'>Attachment of critically acclaimed director Trevor Nunn 
                    (Twelfth Night, Red Joan)</span></li>
                  </ul> 

           </div>

                
        </motion.div>

        <hr className='hr-line my-7 lg:mx-12' />

        {/* SECOND SECTION */}
         <div className='second-section flex-column items-center justify-center lg:mx-[55px] md:ml-[-150px]'>

          <div className='second1 flex-column items-center justify-center md:mt-2 lg:mt-[-60px] lg:ml-12'>
              <p className='text-[#262a33] text-3xl mx-3 md:text-[25px] font-medium text-center lg:my-8 lg:text-3xl lg:font-bold'>
                Angelina - Queen of Coffee
                </p>

                <ul className='mt-2 mx-[30px] text-[10px] md:text-base lg:text-base lg:leading-8 md:leading-6 leading-4'>
                <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-3xl md:text-3xl' /><span className='px-2 text-base'>An Exclusive contract with Paramount Pictures</span></li>
                <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-[60px] md:text-[67px] lg:text-[43px]' /><span className='px-2 text-base'>Attachment of highly sought after Netflix 'Queen Of The South' director Eduardo Sanchez
                <br />* famed for producing the most profitable film in history Blair Witch Project 250m</span></li>
                <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-4xl md:text-[42px] lg:text-[30px]' /><span className='px-2 text-base'>Contract with biggest casting agency in South America</span></li>
                <li className='flex items-start py-2 lg:py-4'><BiMoviePlay className='text-3xl md:text-3xl' /><span className='px-2 text-base'>Attachment of international sales agent</span></li>
                </ul>
         </div>
         <div className='first2 flex items-center justify-center my-8'>
            <img className='w-[275px] lg:w-[350px] rounded-md' src={Angelina} alt="Angelina" />
         </div>
        </div>

        <div className='flex items-center justify-center' id="angelina-landscape">
            <img className='rounded-md' src={Angelina3} alt="Angelina" />
        </div>

        {/* THIRD SECTION */}
         <div className='third-section flex-column items-center justify-center pt-7 px-3 pb-2 lg:pb-12'>
            <div className='lg:px-[100px]'>
                <p className='text-[#262a33] md:pt-12 text-2xl md:text-[27px] md:leading-8 font-medium text-center lg:text-center'>
                    As well as being a great investment opportunity you can get some additional perks :
                </p>
               </div>

              <div className='flex-column md:flex-row items-center justify-center mx-16 md:mx-[75px] md:mb-12 lg:ml-[250px]'>
                <div className='mx-7 mt-5 md:mt-8 text-[10px] leading-6 md:text-base md:leading-10'>
                <p className='flex items-center'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1 text-base my-2'>Film set visits</span></p>

                <p className='flex items-center'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1 text-base my-2'>Appear as an extra</span></p>

                <p className='flex items-center'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1 text-base my-2'>Private screenings</span></p>

                <p className='flex items-center'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1 text-base my-2'>Red carpet events</span></p>

                <p className='flex items-center'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3.5' />
                <span className='px-3 pt-1 text-base my-2'>Name in the credits</span></p>
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
