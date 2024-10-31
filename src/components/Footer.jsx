import React from "react";

function Footer() {

  return (
    <>
      <div  className="flex border mt-32">

        <div className="p-10 text-2xl w-1/3">
          <img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="mb-6 w-32" />
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className="flex border mx-32 ">
          <div className="mx-10 border flex flex-col  px-4">
            <h1 className="flex text-start m-0 p-0 mt-5">Userlinks</h1>
            <ul>
              <li><a>About us:</a></li>
              <li><a>Events</a></li>
              <li><a>Blog</a></li>
              <li><a>F/Q</a></li>
            </ul>
          </div>

          <div className="mx-10 border flex flex-col  px-4">
            <h1 className="flex text-start m-0 p-0 mt-5">Userlinks</h1>
            <ul>
              <li><a>About us:</a></li>
              <li><a>Events</a></li>
              <li><a>Blog</a></li>
              <li><a>F/Q</a></li>
            </ul>
          </div>

          <div className="mx-10 border flex flex-col  px-4 text-xl ">
            <h1 className="flex text-start m-0 p-0 mt-5">Userlinks</h1>
            <ul>
              <li><a>About us:</a></li>
              <li><a>Events</a></li>
              <li><a>Blog</a></li>
              <li><a>F/Q</a></li>
            </ul>
          </div>

        </div>
    </div>
        {/* lastlines */}
        <div className="flex">
          <div>
              links
          </div>
          <div>
              <p>Copyright@2023 Dscode | All rights reserved</p>
          </div>
        </div>

    
    </>
  )

}

export default Footer