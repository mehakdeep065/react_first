import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header'
import Landing from './components/Landing'
import Contacts from './pages/Contacts'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
// //toster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from './pages/Shop'
// import Testsignup from './pages/testsignup'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Contacts" element = {<Contacts/>}/>
      <Route path="/About" element = {<About/>}/>
      <Route path="/Shop" element = {<Shop/>}/>
    </Routes>
      </BrowserRouter> 


    </>
  )
}

export default App
