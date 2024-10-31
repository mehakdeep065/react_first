import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderPage() {

  // react slider 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div>
        <h5 className='title mx-4 md:mx-20'>Special Dishes</h5>
        <p className='subtitle mx-4 md:w-1/3 md:mx-20'>Standout Dishes From Our Menu</p>

        <div className="slider-container lg:w-[92.1rem]">
          <Slider {...settings}>
            <div>
              <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img1.png" alt="slider img" />
                </div>
                <h5>Fattoush salad</h5>
                <p>Description of the item</p>
                <p>$24.00</p>
              </div>
            </div>
            <div>
            <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img2.png" alt="slider img" />
                </div>
                <h5>Vegetable salad</h5>
                <p>Description of the item</p>
                <p>$20.00</p>
              </div>
            </div>
            <div>
            <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img3.png" alt="slider img" />
                </div>
                <h5>Egg veg salad</h5>
                <p>Description of the item</p>
                <p>$34.00</p>
              </div>
            </div>
            <div>
            <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img2.png" alt="slider img" />
                </div>
                <h5>Fruit salad</h5>
                <p>Description of the item</p>
                <p>$28.00</p>
              </div>
            </div>
            <div>
            <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img3.png" alt="slider img" />
                </div>
                <h5>Sprout salad</h5>
                <p>Description of the item</p>
                <p>$30.00</p>
              </div>
            </div>
            <div>
                <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img1.png" alt="slider img" />
                </div>
                <h5>mix-veg salad</h5>
                <p>Description of the item</p>
                <p>$20.00</p>
              </div>
            </div>
            <div>
            <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100'>
                <div>
                  <img src="public\images\recipes\img1.png" alt="slider img" />
                </div>
                <h5>veg-pasta salad</h5>
                <p>Description of the item</p>
                <p>$40.00</p>
              </div>
            </div>
          
          </Slider>
        </div>
      </div>

    </>
  )
}

export default SliderPage