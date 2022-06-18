import React, { Component } from 'react';
import "./dashboard.css";
 import lcourse1 from './images/lcourse1.jpg';
import lcourse2 from './images/lcourse2.jpg';
import lcourse3 from './images/lcourse3.jpg';
import lcourse4 from './images/lcourse4.png';
import lcourse5 from './images/lcourse5.jpg';
//import myprofile from './images/123.jpeg';


export default class Dashboard extends Component {

    render() {
        return ( 
       
            <div>
            <div className="sidebar">
              <div className="logo-details">
                <i className="bx bxl-c-plus-plus" />
                <span className="logo_name">Techno Team</span>
              </div>
              <ul className="nav-links">
                <li>
                  <a href="/Dashboard" className="active">
                    <i className="bx bx-grid-alt" />
                    <span className="links_name">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                   <i class='bx bx-user'></i>
                    <span className="links_name">Student</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="bx bx-list-ul" />
                    <span className="links_name">Course </span>
                  </a>
                </li>
                <li>
                  <a href="/Main">
                    <i className="bx bx-list-ul" />
                    <span className="links_name">Exam </span>
                  </a>
                </li>
                <li>
                  <a href="/list">
                    <i className="bx bx-pie-chart-alt-2" />
                    <span className="links_name">Payment</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bx-coin-stack" />
                    <span className="links_name">Module</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                  <i class='bx bxs-star-half'></i>
                   <span className="links_name">Feedback</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bx-user" />
                    <span className="links_name">Team</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bx-message" />
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bx-heart" />
                    <span className="links_name">Favrorites</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bx-cog" />
                    <span className="links_name">Setting</span>
                  </a>
                </li>
                {/* <li className="log_out">
                  <a href="/">
                    <i className="bx bx-log-out" />
                    <span className="links_name">Log out</span>
                  </a>
                </li> */}
              </ul>
            </div>
            <section className="home-section">
              
              <div className="home-content">
                <div className="overview-boxes">
                  <div className="box">
                    <div className="right-side">
                      <div className="box-topic">Total Course</div>
                      <div className="number">40,876</div>
                      <div className="indicator">
                        <i className="bx bx-up-arrow-alt" />
                        <span className="text">Up from yesterday</span>
                      </div>
                    </div>
                    <i className="bx bx-cart-alt cart" />
                  </div>
                  <div className="box">
                    <div className="right-side">
                      <div className="box-topic">Total Student</div>
                      <div className="number">38,876</div>
                      <div className="indicator">
                        <i className="bx bx-up-arrow-alt" />
                        <span className="text">Up from yesterday</span>
                      </div>
                    </div>
                    <i className="bx bxs-cart-add cart two" />
                  </div>
                  <div className="box">
                    <div className="right-side">
                      <div className="box-topic">Total Profit</div>
                      <div className="number">2,50,000</div>
                      <div className="indicator">
                        <i className="bx bx-up-arrow-alt" />
                        <span className="text">Up from yesterday</span>
                      </div>
                    </div>
                    <i className="bx bx-cart cart three" />
                  </div>
                  <div className="box">
                    <div className="right-side">
                      <div className="box-topic">Total Return</div>
                      <div className="number">11,086</div>
                      <div className="indicator">
                        <i className="bx bx-down-arrow-alt down" />
                        <span className="text">Down From Today</span>
                      </div>
                    </div>
                    <i className="bx bxs-cart-download cart four" />
                  </div>
                </div>
                <div className="sales-boxes">
                  <div className="recent-sales box">
                    <div className="title">Recent Exam Details</div>
                    <div className="sales-details">
                      <ul className="details">
                        <li className="topic">Date</li>
                        <li><a href="/#">17 May 2022</a></li>
                        <li><a href="/#">18 Jan 2022</a></li>
                        <li><a href="/#">19 Jan 2022</a></li>
                        <li><a href="/#">20 Jan 2022</a></li>
                        <li><a href="/#">21 Jan 2022</a></li>
                        <li><a href="/#">22 Jan 2022</a></li>
                        <li><a href="/#">23 Jan 2022</a></li>
                        <li><a href="/#">24 Jan 2022</a></li>
                        <li><a href="/#">25 Jan 2022</a></li>
                      </ul>
                      <ul className="details">
                        <li className="topic">Exam</li>
                        <li><a href="/#">DSA</a></li>
                        <li><a href="/#">OOP</a></li>
                        <li><a href="/#">ITP</a></li>
                        <li><a href="/#">MAD</a></li>
                        <li><a href="/#">SPM</a></li>
                        <li><a href="/#">IWT</a></li>
                        <li><a href="/#">DMS</a></li>
                        <li><a href="/#">OOP</a></li>
                        <li><a href="/#">EAP</a></li>
                      </ul>
                      <ul className="details">
                        <li className="topic">Student</li>
                        <li><a href="/#">Rashmi</a></li>
                        <li><a href="/#">Roshan</a></li>
                        <li><a href="/#">Kawishka</a></li>
                        <li><a href="/#">Rumal</a></li>
                        <li><a href="/#">Dulanjali</a></li>
                        <li><a href="/#">Janith</a></li>
                        <li><a href="/#">Gihan</a></li>
                        <li><a href="/#">Dinesh</a></li>
                        <li><a href="/#">Tharindu</a></li>
                      </ul>
                      <ul className="details">
                        <li className="topic">Action</li>
                        <li><a href="/#">Approved</a></li>
                        <li><a href="/#">Declined</a></li>
                        <li><a href="/#">Declined</a></li>
                        <li><a href="/#">Approved</a></li>
                        <li><a href="/#">Approved</a></li>
                        <li><a href="/#">Approved</a></li>
                        <li><a href="/#">Declined</a></li>
                        <li><a href="/#">Approved</a></li>
                        <li><a href="/#">Approved</a></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="/#">See All</a>
                    </div>
                  </div>
                  <div className="top-sales box">
                    <div className="title">Top Seling Course</div>
                    <ul className="top-sales-details">
                      <li>
                        <a href="/#">
                        <img src={lcourse1} alt="lcourse1"/>
                          <span className="product">Learn Php</span>
                        </a>
                        <span className="price">Rs 10,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse2} alt="lcourse1"/>
                          <span className="product">Learn Java </span>
                        </a>
                        <span className="price">Rs 15,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse3} alt="lcourse3"/>
                          <span className="product">Learn pythan</span>
                        </a>
                        <span className="price">Rs 20,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse4} alt="lcourse4"/>
                          <span className="product">React Basic</span>
                        </a>
                        <span className="price">Rs 15,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse5} alt="lcourse5"/>
                          <span className="product">Learning SQL</span>
                        </a>
                        <span className="price">Rs 25,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse1} alt="lcourse1"/>
                          <span className="product">Boostrap for Beginears</span>
                        </a>
                        <span className="price">Rs 15,000</span>
                      </li><li>
                        <a href="/#">
                         <img src={lcourse2} alt="lcourse1"/>
                          <span className="product">Learn css</span>
                        </a>
                        <span className="price">Rs 15,000</span>
                      </li>
                      <li>
                        <a href="/#">
                        <img src={lcourse3} alt="lcourse1"/>
                          <span className="product">Mobile Development</span>
                        </a>
                        <span className="price">Rs 35,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
   


        );
    }
}