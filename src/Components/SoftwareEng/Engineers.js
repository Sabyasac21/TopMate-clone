import React from 'react';
import Profile from  './Images/Profile.jpg';

function Engineers() {
  return (
    <div className='min-h-[0vh] p-4 py-8 bg-[#faf7f2]'>
        <div className='flex flex-col md:flex-row gap-8  md:m-4 text-left'>
            <div className='w-full md:w-3/5  md:p-8 '>
                <h1 className='font-bold text-4xl ' style={{lineHeight:'1.3'}}>Share and monetise your expertise as a Software Engineer</h1>
                <p className='font-medium text-xl mt-12'>Conduct 1:1s. Host a coding webinar. Sell your interview guide. It's all possible with Topmate!</p>
                <button className='font-bold text-xl mt-12 bg-black rounded-lg text-white p-4 w-full md:w-3/5'>Sign Up Free</button>

            </div>
             <div className='h-[300px] md:h-auto w-full md:w-2/5 relative '>
                <div className='w-[200px] h-[200px] md:h-[400px] md:w-[400px] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>
                    <img className='rounded-full ' src={Profile}/>
                </div>
                <div className='absolute top-[15%] md:top-0 right-[60px] w-[35%]  md:right-[15%]'>
                <img src='https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-category-hero-1.43e44dd8.svg&w=256&q=75'/>
                </div>
                <div className='absolute bottom-0 md:bottom-2 left-[15%] md:left-[5%]'>
                <img className=' ' src='https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-category-hero-2.d41a787d.svg&w=256&q=75'/>
                </div>

                <div className=' font-bold text-sm flex p-1 md:py-3 justify-center gap-2 items-center absolute rounded-full border border-black z-50 bg-white bottom-[15%] md:bottom-[13%] left-[50%] md:left-[60%]'  style={{border:'2px solid black'}}>
                    <img className='w-[22%]' src='https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Flogo-icon.svg&w=48&q=75'/>
                    <span>Dinesh Rajput</span>
                </div>
                

            </div> 
        </div>
    </div>
  )
}

export default Engineers