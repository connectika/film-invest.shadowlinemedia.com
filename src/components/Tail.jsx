import React from 'react'
import './page.css'
import James from '../images/james.jpg'
import FunnyCow from '../images/funny-cow-mad-to-be-normal.jpg'


const Tail = () => {
  
  return (
    <div 
      className='bg-[#fff9f5]'>
        <div className='pt-5' id='tail'>
           <p className='text-sm text-center md:text-base bg-[#ffceac] px-5 py-3 mb-10 lg:text-lg lg:mx-12 lg:rounded'>
           Shadowline are one of the only media companies with full SEIS assurance
            and has a stellar record when it comes to high quality films and investments
             producing a great return (see below).
           </p>
        </div>

        <div className='tail-section flex-column items-center justify-center lg:mr-[100px]'>
            <div
             className='tail1 px-7 md:px-0 md:pr-7'>
                <h1 className='text-2xl font-medium'>ABOUT ME</h1>
                <p className='text-sm mt-[-25px] mb-3'>PRODUCER <sub className='text-5xl'>·</sub> INVESTMENT CONSULTANT</p>
                <p className='text-xs md:text-sm md:leading-7 leading-5 text-left'>
                I'm James Anderson a former radio journalist, accountant, business enterpreneur
                 and more recently a film writer and producer. - I originated the concept and script
                  for the feature film Angelina - Queen of Coffee and have shown my commitment and
                   passion to the project by self financing the film and helping with its extensive
                    creative development. I run my own bespoke consumer litigation company which was
                     featured in the FT and Yorkshire Post for its work in helping consumers with
                      credit rating errors. My company is the first of its kind in the UK to offer
                       this specialised legal service.
                </p>
                <p className='text-xs leading-5 py-5 md:text-sm md:leading-7'>Please find a link to our talented management team
                 <a className='text-[#344d90] underline px-1' href="https://shadowlinemedia.com/">here at Shadowline Media.</a></p>
            </div>
            <div className='tail2 flex items-center justify-center'>
                <img className='w-[300px] mb-5 md:w-[500px] rounded-md' src={James} alt="James" />
            </div>
        </div>
        {/* <hr className='my-7 mx-4 border-2 lg:mx-12' /> */}

                             {/* BOTTOM */}
        <div className='bg-[#fff1e5]'>
       <div className='mx-3 pt-5 md:mx-7 lg:mx-12'>
        <img src={FunnyCow} alt="FunnyCow" />
       </div>
              
       <div>
        <p className='text-xs md:text-sm mb-2 mx-2 rounded py-2 px-2 leading-4 md:leading-6 bg-[#ffceac] lg:text-base lg:mx-0 lg:px-12 lg:py-10 lg:rounded'>
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