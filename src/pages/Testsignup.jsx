import {  React,useState } from 'react'

const [name, setname] = useState('');
const [password, setpassword] = useState('');


const handlename = (e)=>{
    console.log(e.target)
    // setname(e.target)
}

function Testsignup() {
  return (
    <>
    <form>
    <label className="sm:text-center" for='name'>Name: </label>
    <input className="w-full sm:w-1/3" type="text" id="name" name="name" placeholder="Name"  value={name} ></input>
    <input type='password' placeholder='pasword' ></input>

    <button type='submit' >register</button>
    </form>
    </>
  )
}

export default Testsignup