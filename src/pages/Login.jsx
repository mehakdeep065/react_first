import { useState } from "react";
import './User.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
const [email ,cheakEmail] = useState('')
const [password ,cheakPassword] = useState('')

const handleEmail = (e) =>{
  console.log(e.target.value);
  cheakEmail(e.target.value);
}

const handlePassword = (e) =>{
    console.log(e.target.value);
  cheakPassword(e.target.value);
}
const handleSubmit = (e) => {
    
  e.preventDefault();  // Corrected method
  const data = {  email: email, password: password };
  
  axios.post('http://localhost:4000/api/users/signup', data)
    .then((response) => {
      console.log(response.data);
      toast.success("Login successfully")
     
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <div className="container">
        <div>
          <form className="formbox" onSubmit={handleSubmit}>

          <h1>Login</h1>
            {/* <div>
              <label for='name'>Name: </label>
              <input type="text" id="name" name="name" placeholder="Enter your name"></input>
            </div> */}
            <div>
              <label for='email'>Email: </label>
              <input type="email" onChange={handleEmail} value={email} id="email" name="email" placeholder="Enter your email"></input>
            </div>
            <div>
              <label for='password'>Password: </label>
              <input type="password" onChange={handlePassword} value={password} id="password" name="password" placeholder="Enter your password"></input>
            </div>
            <div className="submit_button">
            <button type="submit"  class="signupbtn" >Login</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )

}


export default Login