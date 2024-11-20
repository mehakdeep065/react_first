import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function Footer() {

  return (
    <>
    <div className="hidden md:block">
      <div  className="flex  mt-32">

        <div className="p-10 text-2xl w-1/3">
          <img src="/public/images/logo.png" alt="logo" className="mb-6 w-32" />
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className="flex  mx-32 ">
          <div className="mx-10  flex flex-col  px-4">
            <h1 className="flex text-start m-0 p-0 mt-5">Userlinks</h1>
            <ul className="pt-5 text-lg flex flex-col gap-2">
              <li><a href="#">About us:</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">F/Q</a></li>

            </ul>
          </div>

          <div className="mx-10  flex flex-col  px-4">
            <h1 className="flex text-start m-0 p-0 mt-5 ">MainMenu</h1>
            <ul className="pt-5 text-lg flex flex-col gap-2" >
              <li><a href="#">Home</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Menus</a></li>
              <li><a href="#">Reservation</a></li>
            </ul>
          </div>

          <div className="mx-10  flex flex-col  px-4 text-xl ">
            <h1 className="flex text-start m-0 p-0 mt-5 ">Contact Us</h1>
            <ul className="pt-5 text-lg flex flex-col gap-2">
              <li><a href="#">example@email.com</a></li>
              <li><a href="#">+64 958 248 966</a></li>
              <li><a href="#">Social media </a></li>
              <li><a href="#">F/Q</a></li>
            </ul>
          </div>

        </div>
    </div>
        {/* lastlines */}
        <div className="flex mt-4 px-8">
          <div className="flex gap-4 mx-4 ">
              <img src="public\images\social\🦆 icon _facebook_.png" alt="facebookImg" className="bg-slate-900 px-4 py-2 rounded-3xl" />
              <img src="public\images\social\🦆 icon _instagram_.png" alt="instaImg"  className="bg-[#EDFFEF] px-4 py-2 rounded-3xl" />
              <img src="public\images\social\🦆 icon _twitter_.png" alt="TwiiterImg"  className="bg-[#EDFFEF] px-4 py-2 rounded-3xl" />
              <img src="public\images\social\🦆 icon _youtube_.png" alt="YoutubeImg"  className="bg-[#EDFFEF] px-4 py-2 rounded-3xl" />
          </div>
          <div className="flex align-center m-2 mx-80  justify-center">
              <p>Copyright@2023 Dscode | All rights reserved</p>
          </div>
        </div>
      </div>

      {/* footer for small devices */}
      <div className="relative md:hidden w-[100vw] bg-[#fffefe] mt-10">
      <div className="mx-10  flex flex-col px-4  ">
            <h1 className="flex text-start m-0 p-0 mt-5 justify-center ">More</h1>
            <ul className="pt-5 text-lg flex flex-col gap-2 align-center items-center cursor-pointer" >
              <li><a href="#">Home</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Menus</a></li>
              <li><a href="#">Reservation</a></li>
            </ul>
          </div>
      </div>
    
    </>
  )

}

export default Footer