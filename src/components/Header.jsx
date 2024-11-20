import React from 'react'
import "./Landingpage.css"
import {Navbar} from "responsive-navbar-react"

import 'responsive-navbar-react/dist/index.css'
// import image from "./images/icons8-cart-24.png"

function Header() {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      // {
      //   text: 'Contacts',
      //   link: '/Contacts'
      // },
      {
        text:'shop',
        link:'/Shop'
      },
      {
        text: 'About',
        link: '/About'
      },
      {
        text: 'Signup',
        link: '/Signup'
      },
    
    ],
    logo: {
      img :"/public/images/logo.png",
      
    },
    style: {
      barStyles: {
        background: '#4ADE80',
        display:'flex',
        
        // justifyContent:'space-batween',
        
      },
      linkStyles:{
        color:'white',  //go to https://bdbose.github.io/responsive-navbar-react/
        fontSize: '19px', 
        fontFamily:'Impact,Charcoal,sans-serif'
        // justifyContent:'center',


      },
      sidebarStyles: {
       background: '#222',
        buttonColor: 'white'
      }
    },


  }
    return (
        <>
            
            
             {/* <nav>
                <h1>SPAAK</h1>
                <div className="nav-mid">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Contacts</a>
                    <a href='#'>More</a>
                </div>
                <div className="icons">
                    <a><img src="./images/icons8-search-50.png" alt="1" /></a>
                    <a><img src="./images/icons8-cart-24.png" alt="2" /></a>
                    <a><img src="./images/add-user.png" alt="3" /></a>
                    <a><img className='hamburger' src="./images/icons8-menu-50.png" alt="4" /></a>
                </div>
            </nav>  */}
                   <Navbar {...props} />


        </>
    )
}

export default Header