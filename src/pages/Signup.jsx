import { React, useState } from "react";
import './User.css';
import axios from "axios";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log("inside signup");


function Signup() {
  // let name = '';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //notify singnup



  const handleName = (e) => {
    console.log(e.target.value);  {/* event.target= <input email......>  */}{/* event.target.value= target only value */}
    setName(e.target.value)
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

    e.preventDefault();  // Corrected method
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
    <div>
      <ToastContainer />
      <div className="container ">
        <div>
          <form className="formbox" onSubmit={handlesubmit}>
            <h1>Signup</h1>
            <div>
              <label className="sm:text-center" for='name'>Name: </label>
              <input className="w-full sm:w-1/3" type="text" onChange={handleName} value={name} id="name" name="name" placeholder="Name" ></input>
            </div>
            <div>
              <label for='email'>Email: </label>
              <input type="email" onChange={handleEmail} value={email} id="email" name="password" placeholder="Enter your email"></input>
            </div>
            <div>
              <label for='password'>Password: </label>
              <input type="password" onChange={handlePassword} value={password} id="password" name="password" placeholder="Enter your password"></input>
            </div>
         
            <div className="submit_button" for="submit">
            <button type="submit">Singnup</button>
            </div>
            <p className="text-2xl">Already have account?{""} {/* {""} for single space */}
              <Link to={'/Login'}>Login</Link>
            </p>

          </form>
        </div>
      </div>

    </div>
  )

}

export default Signup