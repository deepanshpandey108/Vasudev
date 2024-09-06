import React from 'react'
import './Landing.css'
import './App.css'
import Navbar from './components/Navbar'
import Slideshow from './components/Slideshow'
const Landing = () => {
  return (
    <div className=''>
      <div className="">
      </div>
      <Navbar />
      <div className="img1">
        <img src="./1.jpeg" alt="" />
      </div>
      <div className="second">
        <div className="left1">
          {/* <h4>Lorem ipsum dolor sit amet.</h4> */}
          <h1 className='poppins-thin' >Vasudev</h1>
          <div className='intro'>"At Vasudev, our mission is to create a safer world for women through technology,
             empowering them to navigate their daily lives with confidence and peace of mind."</div>
          <button className='started'>Get started</button>
        </div>

      </div>
      <div className="third">
        <div className="left3">
          <h1>Who are we</h1>
          <h3 >Vasudev is a pioneering initiative designed to enhance women's safety through the use of cutting-edge technology. 
            Named after Bhagwan Krishn, a symbol of protection and wisdom, Vasudev leverages advanced technological solutions to provide women with robust safety measures.
             With a commitment to empowering women and fostering a safer society, Vasudev aims to be at the forefront of technological advancements in personal security. Through continuous monitoring and analysis of real time data, 
            we strive to create a comprehensive solution that ensures peace of mind and protection for women everywhere.</h3>
          <button className='know'>Get to know us</button>
        </div>
        <div className="right3"><img src="https://static.vecteezy.com/system/resources/previews/003/002/539/non_2x/woman-security-and-protection-vector.jpg" alt="" /></div>
      </div>
      <div className="fourth">
        <div className="left4">
          <h1>Our Mission</h1>
          <p>We are making the world a safer place for all, especially women & girls by preventing gender-based violence through data-backed, collective action from individuals, communities, and institutions.</p>
        </div>
        <div className="right4">
          <h1>Our Vision</h1>
          <p>Safer spaces for all, especially women and girls, so that they can explore and achieve their potential.</p>
        </div>
      </div>
      {/*  */}
      <Slideshow />
      <div className="sixth">
        <div className="sixth1"><h1>How it works ,Know more about it</h1></div>
        <div className="sixth2"><img src="https://reddotfoundation.in/assets/images/home/Safecity.jpg" alt="" /></div>
        <div class="safety">
          <h3>What is Safecity?</h3>
          <p>Safecity is a crowd-sourced platform designed to collect anonymous reports about sexual and
            gender-based harassment and abuse. These reports are aggregated and visualized on a map,
            providing valuable data for individuals, communities, and policymakers.</p>
          <button className='safeexplore'>Explore safety</button>
        </div>
        <div className="sixth3">
          <div class="safecity_content_main">

            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/anonymous.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Machine Learning</h3>
                <p>Data Analysis.</p>
              </div>
            </div>
            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/geo_tagg.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Real-Time Location Tracker</h3>
                <p>Pinpoint the location of each reported incident.</p>
              </div>
            </div>
            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/geo_tagg.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Gender  Classification</h3>
                <p>Real time gender distribution.</p>
              </div>
            </div>



            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/Community.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Data Security and Blockchain</h3>
                <p>Data driven solutions for safer spaces</p>
              </div>

            </div>
          </div>
        </div>
        <div className="sixth4">
          <button className='check_out'>CHECK OUT</button>
          <button className='check_out'>Technology</button>
        </div>
      </div>
      <div className="seventh">
        <div className="left">
          <div class="main_heading">
            <h1 class="donate_heading">Our Impact</h1>
            <p>Area to be monitor using our website</p>
          </div>
        </div>
        <div className="right7"><img src="bhagalpur-tehsil-map.jpg" alt="" /></div>
      </div>
      <div className="eigth">
        <div className="left8">
          <img src="vasudev.jpeg" alt="" />
          <p>Powered by Vasudev Foundation </p>
        </div>
        <div className="right8">
          <h3>Conatct us</h3>
          <div class="bottomfooter">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6 p-0">
                  <div class="bootomleft">
                    <p>© 2024 Vasudev Foundation. All rights reserved.</p>
                  </div>

                </div>

                <div class="col-md-6 p-0">
                  <div class="bootomright">
                    <ul>
                      <li><a href="" target="_blank"><img src="https://reddotfoundation.in/assets/images/socialicon.svg"></img></a></li>
                      <li><a href="" target="_blank"><img src="https://reddotfoundation.in/assets/images/socialicontwo.svg"></img></a></li>
                      <li><a href="" target="_blank"><img src="https://reddotfoundation.in/assets/images/socialiconfour.svg"></img></a></li>
                      <li><a href="" target="_blank"><img src="https://reddotfoundation.in/assets/images/socialthree.svg"></img></a></li>
                      <li><a href="" target="_blank"><img src="https://reddotfoundation.in/assets/images/socialiconfive.svg"></img></a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
