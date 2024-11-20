import React from 'react'
import { Link } from "react-router-dom";

const food_items = [
    {id: 1, title:"veg salad", price: '40$', des:"Description of the item", image:'/images/recipes/img2.png'},
    {id: 2, title:"Break Fast",price: '20$',des:"(12 break fast)", image:'/images/recipes/img1.png'},
    {id: 3, title:"Dessert",price: '60$',des:"(48 dessert)", image:'/images/recipes/img3.png'},
    {id: 4, title:"Browse All",price: '80$',des:"(255 Items)", image:'/images/recipes/img1.png'},
    {id: 5, title:"Dessert",price: '60$',des:"(48 dessert)", image:'/images/recipes/img3.png'},
    {id: 6, title:"veg salad", price: '40$', des:"Description of the item", image:'/images/recipes/img2.png'},
    {id: 7, title:"Browse All",price: '80$',des:"(255 Items)", image:'/images/recipes/img1.png'},
    {id: 8, title:"veg salad", price: '40$', des:"Description of the item", image:'/images/recipes/img2.png'},
    {id: 3, title:"Dessert",price: '60$',des:"(48 dessert)", image:'/images/recipes/img3.png'},

    
  ]

function Shopmid() {
    return (
        <>
            <div>
                <ul className='flex  gap-4  md:flex-row md:gap-20 mx-10 mt-10 text-3xl md:text-xl'>
                    <li><Link to ='/shop'>All</Link></li>
                    <li><a>Salads</a></li>
                    <li><a>Soups</a></li>
                    <li><a>Drinks</a></li>
                    <li><a>More</a></li>
                </ul>
            {/* box using array */}
            <div className='grid  md:grid-cols-3 justify-center '>
                {
                
                food_items.map((items)=>(
                    <div key={items} className='bg-[#FAFAFA] flex  flex-col justify-center text-center p-10 px-20 md:px-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                    <div className='flex justify-center'>
                        <img src={items.image}></img>
                    </div>
                        <h5>{items.title}</h5>
                        <p>{items.des}</p>
                        <p>{items.price}</p>
                    </div>
                ))
              
                }
             </div>
                {/* all items boxes */}
                {/* <div className='grid  md:grid-cols-3'>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img2.png" alt="slider img" />
                        </div>
                        <h5>veg salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>

                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img3.png" alt="slider img" />
                        </div>
                        <h5>Egg-tomato salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                    recipes" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img3.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img2.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img1.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                    <div className='bg-[#FAFAFA] p-10 my-10 mx-10 rounded-3xl shadow-lg cursor cursor-pointer hover:-translate-y-6 duration-100 '>
                        <div>
                            <img src="public\images\recipes\img3.png" alt="slider img" />
                        </div>
                        <h5>veg-pasta salad</h5>
                        <p>Description of the item</p>
                        <p>$40.00</p>
                    </div>
                </div> */}
            </div> 
        </>
    )
}

export default Shopmid