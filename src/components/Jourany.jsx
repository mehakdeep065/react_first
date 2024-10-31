import React from 'react'

function Jourany() {
  return (
    <>
      <div className='md:flex  '>
        <div className='hidden md:flex lg:flex-col  w-1/2 px-10  mt-16 '>
          <h5 className='title py-6'>Our Story & Services</h5>
          <h3 className='subtitle py-6'>Our Culinary Journey And Services</h3>
          <p className='pera py-10 '>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
          <button className=" btn bg-green-400 px-6 mx-4 py-3 font-semibold text-white rounded-full w-1/3 ">Explore</button>
        </div>

        <div className='flex justify-center' >
          <h1 className=' md:hidden'>Services</h1>
        </div>
        <div className='grid md:grid-cols-2  pt-14 px-4 md:mx-32 align-middle text-center justify-center items-center text-lg w-[100%] md:w-[35%] gap-6'>
          <div className='bg-[#FAFAFA] p-5 py-10  mx-10 w-[227px] h-[297px] rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
            <div className=' flex justify-center   '>
              <img src="public\images\home\services\icon1.png" alt="slider img" />
            </div>
            <h5 className='mb-4 text-2xl'>Catering</h5>
            <p>Delight your guests with our flavors and  presentation</p>

          </div>
          <div className='bg-[#FAFAFA] pt-14 px-4  mx-10 w-[227px] h-[298px] rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
            <div className=' flex justify-center  '>

              <img src="public\images\home\services\icon2.png" alt="slider img" />
            </div>
            <h5 className='mb-4 text-2xl'>Fast delivery</h5>
            <p>We deliver your order promptly to your doo</p>

          </div>
          <div className='bg-[#FAFAFA]  pt-14 px-4 mx-10 w-[227px] h-[298px] rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
            <div className=' flex justify-center  '>
              <img src="public\images\home\services\icon3.png" alt="slider img" />
            </div>
            <h5 className='mb-4 text-2xl'>Online Ordering</h5>
            <p>Explore menu & order with ease using our Online Ordering </p>

          </div>
          <div className='bg-[#FAFAFA]  pt-14 px-4  mx-10 w-[227px] h-[298px] rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 align-middle'>
            <div className=' flex justify-center  '>
              <img src="public\images\home\services\icon4.png" alt="slider img" />
            </div>
            <h5 className='mb-4 text-2xl'>Gift Cards</h5>
            <p>Give the gift of exceptional dining with Foodi Gift Cards</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Jourany