import React from 'react'
import './Landing.css'
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
          <h4>Lorem ipsum dolor sit amet.</h4>
          <h1>AADISHAKTI</h1>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat excepturi pariatur eligendi, blanditiis beatae nobis harum velit, minima aut saepe aspernatur deserunt architecto molestiae nemo! Inventore fugit ad commodi.</p>
          <button className='started'>Get started</button>
        </div>

      </div>
      <div className="third">
        <div className="left3">
          <h1>Who are we</h1>
          <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt culpa ipsum architecto numquam praesentium velit nemo explicabo ab nulla? Maiores, iusto voluptatem consequatur labore esse, error inventore quam voluptate rem qui architecto explicabo aperiam in natus. Rem cumque officiis odit eaque, doloremque nisi vitae in facilis, provident necessitatibus libero ipsa.</p>
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
        <div className="sixth1"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facere?</h1></div>
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
                <h3>Anonymous Reporting</h3>
                <p>Your identity is safe with us.</p>
              </div>
            </div>
            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/geo_tagg.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Geo-tagged Incidents</h3>
                <p>Pinpoint the location of each reported incident.</p>
              </div>
            </div>
            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/geo_tagg.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Community Engagement</h3>
                <p>Share your stories and learn from others.</p>
              </div>
            </div>



            <div class="safecity_content">
              <div class="safecity_icon"><img src="https://reddotfoundation.in/assets/images/home/Community.svg" class="img-fluid" alt=""></img>
              </div>

              <div class="safecity_name">
                <h3>Actionable Insights</h3>
                <p>Data driven solutions for safer spaces</p>
              </div>

            </div>
          </div>
        </div>
        <div className="sixth4">
          <button className='check_out'>CHECK OUT</button>
          <button className='check_out'>Lorem, ipsum dolor.</button>
        </div>
      </div>
      <div className="seventh">
        <div className="left">
          <div class="main_heading">
            <h1 class="donate_heading">Our Impact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque quas pariatur earum nemo recusandae natus ipsum, doloremque aliquam totam cupiditate reiciendis ducimus in ratione maxime commodi repellendus nihil reprehenderit.</p>
          </div>
        </div>
        <div className="right7"><img src="bhagalpur-tehsil-map.jpg" alt="" /></div>
      </div>
      <div className="eigth">
        <div className="left8">
          <img src="https://reddotfoundation.in/assets/images/footerlogo.svg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore dolorem nihil sint, perferendis excepturi quisquam consequatur sapiente, tenetur ullam doloribus soluta error deserunt officiis, aspernatur expedita quae voluptates autem!</p>
        </div>
        <div className="right8">
          <h3>Conatct us</h3>
          <div class="bottomfooter">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6 p-0">
                  <div class="bootomleft">
                    <p>© 2023 Red Dot Foundation. All rights reserved.</p>
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
