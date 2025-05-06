import React from "react";
import { Link } from "react-router-dom";

function Poster() {

    return (
        <>
            <div className=" mx-0 md:mx-0 section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
                <div className=" bg_poster  py-24 flex flex-col md:flex-row justify-between  items-center w-[90vw]  ">
                    {/* left part */}
                    <div className="md:w-1/2 space-y-6 px-4  gap-x-10  " >
                    
                        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">Dive into Delights Of Delectable <span className="text-green-400">Food</span></h2>
                        <p className="text-xl text-[#4A4A4A]">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <button className=" btn bg-green-400 px-8 py-3 font-semibold text-white rounded-full " ><Link to='/Shop'>Order now </Link></button>
                    </div>
                    {/* right part */}
                    <div className="hidden md:block md:w-1/2  relative ">
                        <img src="images\home\banner.png" alt="not found" />

                        <div className="flex justify-between">
                            {/* childimg1 */}
                            <div className=" md:flex hidden gap-4 bg-white w-1/3 rounded-3xl p-1  absolute bottom-1 left-20">
                                <img src="images\home\b-food1.png" alt="not found img" className="rounded-2xl" />
                                <div>
                                    <h5 className="mt-2 text-xl">Atta Noodels</h5>
                                    <p className="text-orange-400">$18.00</p>
                                </div>
                            </div>
                            {/* childimg2 */}
                            <div className="md:flex hidden gap-4 bg-transparent border border-slate-300 w-1/3 rounded-3xl p-1 align-middle  absolute  bottom-1 left-2/3">
                                <img src="images\home\b-food1.png" alt="not found img" className="rounded-2xl" />
                                <div>
                                    <h5 className="mt-2 text-xl">Salad</h5>
                                    <p className="text-orange-400 py-2">$28.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
           
         

        </>
    )

}

export default Poster 