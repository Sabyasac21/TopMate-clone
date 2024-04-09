import React from 'react';
import '../Styles/review.css';


function Review() {
  return (
    <div className='bg-[#1b363f] flex flex-col justify-center py-12 pb-12'>
        <div className='my-12'>
            <h2 className='text-6xl font-bold text-white'>People love using topmate</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4'>
            <div className='check w-full bg-white bg-opacity-90 rounded-3xl relative'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>Love the integration with Calender, Zoom and WhatsApp.Makes my life easier.</p>
                </div>
                <div className='mx-8 mb-8 flex items-center '>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Faishwariya.JPG&w=48&q=75'/>
                    </div>
                    <div className='px-4 text-left'>
                        <h1 className='text-lg font-medium'>Aishwarya Srinivasan</h1>
                        <p>LinkedIn Top Voice</p>
                    </div>
                </div>
            </div>
            <div className='check w-full bg-white bg-opacity-90 rounded-3xl'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>The entire experience is just so seamless. My followers love it</p>
                </div>
                <div className='mx-8 mb-8 flex items-center'>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Faishwariya.JPG&w=48&q=75'/>
                    </div>
                    <div className='px-4 relative text-left bottom-0'>
                        <h1 className='text-lg font-medium'>Joerg Storm</h1>
                        <p>300K on LinkedIn</p>
                    </div>
                </div>
            </div>
            <div className='check w-full bg-white bg-opacity-90 rounded-3xl'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>Topmate is my go-to platform for scheduling 1:1 sessions and hosting webinars!</p>
                </div>
                <div className='mx-8 mb-8 flex items-center'>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Faishwariya.JPG&w=48&q=75'/>
                    </div>
                    <div className='px-4 text-left'>
                        <h1 className='text-lg font-medium'>Xinran Waibel </h1>
                        <p>Founder of Data Engineer Things</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:block check w-full bg-white bg-opacity-90 rounded-3xl'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>All my monetisation now happens in one place</p>
                </div>
                <div className='mx-8 mb-8 flex items-center'>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Faishwariya.JPG&w=48&q=75'/>
                    </div>
                    <div className='px-4 text-left'>
                        <h1 className='text-lg font-medium'>Payal & Gaurav </h1>
                        <p>110K+ on Instagram</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:block check w-full bg-white bg-opacity-90 rounded-3xl'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>The team is extremely helpful and cares a lot about feedback. They keep rolling out new features too!</p>
                </div>
                <div className=' mx-8 mb-8 flex items-center'>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Faishwariya.JPG&w=48&q=75'/>
                    </div>
                    <div className='px-4 text-left'>
                        <h1 className='text-lg font-medium'> Lorraine Lee</h1>
                        <p>Speaker, 320K on LinkedIn</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:block check w-full bg-white bg-opacity-90 rounded-3xl'>
                <div className='py-4 px-8 text-xl my-4 mt-12 text-left'>
                    <p>I love Topmate! It has made it seamless to schedule mentoring sessions! Big fan of Topmate’s WhatsApp integration.</p>
                </div>
                <div className='mx-8 mb-8 flex items-center'>
                    <div className='w-12'>
                        <img className='w-full rounded-full' src='https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Fjessica_iriarte.png&w=48&q=75'/>
                    </div>
                    <div className='px-4 text-left'>
                        <h1 className='text-lg font-medium'>Jessica </h1>
                        <p>Global Data Lead in Energy Industry</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review