import React from 'react'

const categoryitems = [
  {id: 1, title:"main Dish",des:"(86 dishes)", image:'/images/home/category/img1.png'},
  {id: 2, title:"Break Fast",des:"(12 break fast)", image:'/images/home/category/img2.png'},
  {id: 3, title:"Dessert",des:"(48 dessert)", image:'/images/home/category/img3.png'},
  {id: 4, title:"Browse All",des:"(255 Items)", image:'/images/home/category/img4.png'}
]

function Category() {
  return (
    <>
           {/* our collections */}
           <div className="w-full bg-[#FCFCFC] flex flex-col text-center ">
                <p className="title">Customer Favorites</p>
                <h2 className="subtitle">Popular Catagories</h2>

                {/* category cards */}
                <div className='flex flex-col  sm:flex-row  flex-wrap gap-8 justify-around '>
              
                   {
               
                    categoryitems.map((items)=>(
                      <div key={items} className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div className='flex  justify-center mx-6 '>
                          <img src={items.image} alt="category" className='bg-[#C1F1C6]  p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div  className="text-center">

                          <h5>{items.title}</h5>
                          <p>{items.des}</p>
                          </div>
                        </div>
                    ))
                    
                   }
                </div>
            </div>
    </>
  )
}

export default Category