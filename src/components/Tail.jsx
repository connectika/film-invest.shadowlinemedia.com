import React, { useEffect } from 'react'
import './page.css'
import James from '../images/james.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faTowerObservation } from '@fortawesome/free-solid-svg-icons';

const boxVariant = {
  visible: { opacity: 1, ease: "linear", type: "tween", transition: { duration: 2.5 } },
  hidden: { opacity: 0}
};

const Tail = () => {
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
    <div className='bg-[#fff9f5]'>
        <div className='pt-5' id='tail'>
            <p className='text-sm text-center md:text-base bg-[#ffceac] px-5 py-3 mb-10 lg:text-lg lg:mx-12 lg:rounded'>
            Shadowline are one of the only media companies with full SEIS assurance
            and has a stellar record when it comes to high quality films and investments
            producing a great return (see below).
            <br/>
            <br/>
            Please find a link to our experienced team of investment, media and television executives team here at Shadowline <a href="https://shadowlinemedia.com/#team-section" target="_blank">here</a>.
            </p>
        </div>

        {/* BOTTOM */}
        <div className='bg-[#fff1e5]'>
            <br/>
            <div className='flex items-center justify-center'>
                <button className='button bg-[#262a33] text-white py-2 px-4 my-5 md:py-5 mx-9 rounded'>
                    <a href="https://shadowlinemedia.com/projects/released/funny-cow" target="_blank">Learn about the "Funny Cow" project</a>
                </button>
            </div>
            <hr/>
            <div className='flex items-center justify-center'>
                <button className='button bg-[#262a33] text-white py-2 px-4 my-5 md:py-5 mx-9 rounded'>
                    <a href="https://shadowlinemedia.com/projects/released/mad-to-be-normal" target="_blank">Learn about the "Mad to be Normal" project</a>
                </button>
            </div>

           <div>
                <p className='text-xs md:text-sm mb-2 mt-7 py-2 px-2 leading-4 md:leading-6 bg-[#ffceac] lg:text-base lg:px-12 lg:py-10'>
                 <b>Disclaimer:</b> Any person considering potential investment opportunities featured should
                 make their own commercial assessment of an investment opportunity and consider seeking
                  the advice of an appropriately authorised or regulated financial advisor. The email should
                   not be construed as advice or a personal recommendation to any prospective investor.
                </p>
                <p className='text-center text-xs text-[#262a33] pb-2'>Copyright ©2023 All rights reserved</p>
           </div>
       </div>

    </div>
  )
}

export default Tail