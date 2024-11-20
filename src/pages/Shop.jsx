import React from 'react'
import Shopmid from '../components/shopmid'
import Footer from '../components/Footer'


function Shop() {
    return (
        <>
            <div className='flex flex-col text-center gap-4  h-[50vh] md:h-[111vh]  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#86dd86] to-100% justify-center'>
                <h1 className='text-3xl font-bold'>Dive into Delights Of Delectable Food</h1>
                <p className='text-xl'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <div>
                    <button className=" btn bg-green-400 px-8 py-3 font-semibold text-white rounded-full ">Order now</button>
                </div>
            </div>
            <Shopmid/>
            <Footer/>
        </>
    )
}

export default Shop