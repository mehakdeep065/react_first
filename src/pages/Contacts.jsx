import React from 'react'

function Contacts() {
    return (
        <>
            <div className="container h-screen bg-zinc-900 flex border-red-100 content-center text-xl">
                <div className="bg-slate-500 w-1/3 m-4 p-5 text-center  ">

                    <h1>Contact Us:</h1>
                    <div className='m-4 my-5'>
                        <label for='email'>Email: </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className='rounded-xl border-slate-800 bg-transparent'></input>

                        <div className="submit_button my-5 ">
                            <input className='p-4 rounded-xl'  type="submit"></input>
                        </div>
                        <div className='my-5  '>
                            <p>Phone no:9815974905</p>
                            <p>Phone no:9914463190</p>
                            <p>CompanyEmail:mk76269464@gmail.com</p>
                            <p>Linkdin:mehakdeepsingh065</p>
                            <p>instagram:mehaksingh065</p>
                            <input type='text'></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts