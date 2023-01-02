import React from 'react'
import './page.css'
import James from '../images/james.jpg'
import FunnyCow from '../images/funny-cow-mad-to-be-normal.jpg'

const Tail = () => {
  return (
    <div className='mx-0'>
        <div className='pt-5' id='tail'>
           <p className='text-sm md:text-base bg-[#e3effc] px-5 py-3 mb-10 lg:text-lg lg:mx-12 lg:rounded'>
           Shadowline are one of the only media companies with full SEIS assurance
            and has a stellar record when it comes to high quality films and investments
             producing a great return (see below).
           </p>
        </div>

        <div className='tail-section flex-column items-center justify-center lg:mr-[100px]'>
            <div className='tail1 px-7 md:px-0 md:pr-7'>
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
                 <a className='text-[#448feb] underline px-1' href="https://shadowlinemedia.com/">here at Shadowline Media.</a></p>
            </div>
            <div className='tail2 flex items-center justify-center'>
                <img className='w-[300px] md:w-[500px] rounded-md' src={James} alt="James" />
            </div>
        </div>
        <hr className='my-7 mx-4 border-2 lg:mx-12' />

                             {/* BOTTOM */}
       <div className='mx-5 md:mx-7 lg:mx-12'>
        <img src={FunnyCow} alt="FunnyCow" />
       </div>
              
              <div className='text-center my-1'>
            <a className='text-xs md:text-sm text-[#448feb]' href="#Top">Back to top</a>
            </div>

       <div>
        <p className='text-xs md:text-sm mb-5 mx-0 py-2 px-2 leading-4 md:leading-6 bg-[#e3effc] lg:text-base lg:mx-0 lg:px-12 lg:py-10 lg:rounded'>
         <b>Disclaimer:</b> Any person considering potential investment opportunities featured should
         make their own commercial assessment of an investment opportunity and consider seeking
          the advice of an appropriately authorised or regulated financial advisor. The email should
           not be construed as advice or a personal recommendation to any prospective investor.
        </p>
       </div>
    </div>
  )
}

export default Tail