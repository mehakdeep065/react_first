import React from 'react'

function Feedback() {
  return (
    <>
    <div className='flex  mx-7 justify-between'>
   
        <img src="public\images\home\testimonials\testimonials.png" alt=" testimonials" />

      
        <div className='hidden md:flex lg:flex-col text-center   justify-center  w-1/2 px-10 '>
            <h5 className='title py-10'>Testimonials</h5>
            <h3 className='subtitle py-10'>What Our Customers Say About Us</h3>
            <p className='pera py-10'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <div className='flex  relative py-10'>
                <img src="public\images\home\testimonials\testimonial1.png" alt='not found' className='absolute ' />
                <img src="public\images\home\testimonials\testimonial2.png" alt='not found' className='absolute  left-16' />
                <img src="public\images\home\testimonials\testimonial3.png" alt='not found' className='absolute left-32' />
            </div>
            <div className='relative '>
            <p className=' absolute text-xl left-[40%]'> Customer Feedback (18.6k Reviews)</p>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Feedback