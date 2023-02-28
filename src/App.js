import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoMailOutline, IoChevronBackCircle, IoStar } from "react-icons/io5";
import '../node_modules/remixicon/fonts/remixicon.css'

export const App = () => {


  const showHiddenPass = () => {
    const input = document.getElementById('input-pass')
    const iconEye = document.getElementById('input-icon')
    // change password to text
    if (input.type === 'password') {
      // switch to text
      input.type = 'text'
      //add icon
      iconEye.classList.add('ri-eye-line')
      // remove icon
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      // change to password
      input.type = 'password'
      // remove icon
      iconEye.classList.remove('ri-eye-line')
      //add icon
      iconEye.classList.add('ri-eye-off-line')
    }
  }

  return (
    <>
      <header className="header">


        <div className="side-nav">
          <div className="user">
            <img src="images/user.png" className='user-img' alt="user" />
            <div>
              <h2>Thomas Daniel</h2>
              <p>gmail@gmail.com</p>
            </div>
            <img src="images/star.png" className="star-img" />
          </div>
          <ul>
            <li> <img src="images/dashboard.png" /> <p>  Dashboard</p></li>
            <li> <img src="images/reports.png" /> <p>Reports</p></li>
            <li> <img src="images/rewards.png" /> <p>Rewards</p></li>
            <li> <img src="images/messages.png" /> <p>Messages</p></li>
            <li> <img src="images/video-chat.png" /> <p>Video Chat</p></li>
            <li> <img src="images/projects.png" /> <p>Our Projects</p></li>
            <li> <img src="images/setting.png" /> <p>Setting</p></li>
          </ul>
          <ul>
            <li> <img src="images/logout.png" /> <p>Logout</p></li>
          </ul>
        </div>


        <div className="container">
          <div className="login__content">
            {/* <img src="images/background.png" className="login__img" alt="login image" /> */}

            <form className="login__form">
              <div>
                <h1 className="login__title"> <span>Welcome</span>Back </h1>
                <p className="login__description">
                  Welcome! Please login to continue.
                </p>
              </div>
              <div>
                <div className="login__inputs">

                  <div>
                    <label for='' className="login__label">Email</label>
                    <input type='email' placeholder="Enter your email address" required className="login__input" />
                  </div>

                  <div>
                    <label for='' className="login__label">Password</label>
                    <div className="login__bx">
                      <input type='password' placeholder="Enter your password" required className="login__input" id="input-pass" />
                      <i class="ri-eye-off-line login__eye" id="input-icon" onClick={showHiddenPass} ></i>
                    </div>
                  </div>
                </div>

                <div className="login__check">
                  <input type='checkbox' className="login__check-input" />
                  <label for='' className="login__check-label" >Remember me</label>
                </div>
              </div>

              <div>
                <div className="login__buttons">
                  <button className="login__button">Log In </button>
                  <button className="login__button login__button-ghost">Sign Up </button>
                </div>
                <a href="#" className="login__forgot">Forgot Password?</a>
              </div>


            </form>
          </div>
        </div>


      </header>

    </>
  );
};

