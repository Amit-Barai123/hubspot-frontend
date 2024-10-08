import React, { useState } from 'react'

const Header = () => {
 
  return (
    <header>
        <div class="container">
            <div class="logo"><img src="./images/Sample Logo.png" ></img></div>
            <nav>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                
            </nav>
            
            <div class="auth">
                    <a href="#" class="login">Login</a>
                    <a href="#" class="register">Register</a>
                </div>
            <div className='mobile-menu'><img  style={{height:"30px", width:"30px"}}  src="./images/burger-bar.png" ></img></div>
        </div>
    </header>

  )
}

export default Header
