import { React, useState } from "react";
import Form from "../components/Form";
import './User.css';
import axios from "axios";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log("inside signup");


function Signup() {
  // let name = '';
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //notify singnup



  const handleName = (e) => {
    console.log(e.target.value); {/* event.target= <input email......>  */ } {/* event.target.value= target only value */ }
    setName(e.target.value)
  }

  const handleNumber = (e) => {
    console.log(e.target.value);
    setNumber(e.target.value)

  }
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handlesubmit = (e) => {
    console.log("hello mehak from submiiiit...");

    e.preventDefault();  // Corrected method //prevent from reloading submit.
    const data = { name: name, email: email, password: password };


    axios.post('http://localhost:4000/api/users/signup', data)
      .then((response) => {
        console.log(response.data);
        toast.success("signup successfully")
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    // <div>
    // 
    //   <div className="container ">
    //     <div>
    //       <form className="formbox" onSubmit={handlesubmit}>
    //         <h1>Signup</h1>
    //         <div>
    //           <label className="sm:text-center" for='name'>Name: </label>
    //           <input className="w-full sm:w-1/3" type="text" onChange={handleName} value={name} id="name" name="name" placeholder="Name" ></input>
    //         </div>
    //         <div>
    //           <label for='email'>Email: </label>
    //           <input type="email" onChange={handleEmail} value={email} id="email" name="password" placeholder="Enter your email"></input>
    //         </div>
    //         <div>
    //           <label for='password'>Password: </label>
    //           <input type="password" onChange={handlePassword} value={password} id="password" name="password" placeholder="Enter your password"></input>
    //         </div>

    //         <div className="submit_button" for="submit">
    //         <button type="submit">Singnup</button>
    //         </div>
    //         <p className="text-2xl">Already have account?{""} {/* {""} for single space */}
    //           <Link to={'/Login'}>Login</Link>
    //         </p>

    //       </form>
    //     </div>
    //   </div>

    // </div>
    <>
      <ToastContainer />
      <div className="p-5 sm:mx-[30vw]">
        <form onSubmit={handlesubmit}>
          <Form message='Full Name' type="text" placeholder="Name" required onChange={handleName} value={name} />
          <Form message='Phone Number' type="number" placeholder="Number" required onChange={handleNumber} value={number} />
          <Form message='Email Address' type="email" placeholder="email address" required onChange={handleEmail} value={email} />
          <Form message='Password' type="password" placeholder="password" required onChange={handlePassword} value={password} />


          <div className="mt-1">
            <p className="ml-0.5">Are you a company?<span className="text-red-800">*</span></p>
            <div className="m-2">
              <label><input className="mr-2  " type="radio" name="company" id="company" value='yes' required style={{ accentColor: "#6C25FF" }} />Yes</label>
              <label><input className="mx-2" type="radio" name="company" id="company" value='no' required style={{ accentColor: "#6C25FF" }} />No</label>
            </div>
          </div>

          {/* <Link to="/Profile"><Button className="bg-[#6C25FF] text-white w-full relative top-[5vw]  " message='Create Account' /></Link> */}
          <div className="submit_button" for="submit" >
            <button className="bg-[#4ADE80]" type="submit">Singnup</button>
          </div>
          <p className="text-2xl">Already have account?{""} {/* {""} for single space */}
            <Link to={'/Login'}>Login</Link>
          </p>
        </form>
      </div>
    </>
  )

}

export default Signup