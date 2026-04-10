// import to from "../Images/To.png";
// import framei from "../Images/Frame21.png";
// import frame2 from "../Images/Frame20.png";
// import frame3 from "../Images/Frame19.png";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="footer-left">
//         <div>
//           <img src={to} alt="Q&A S" />
//         </div>
//         <div>
//           <img src={framei} />
//           <img src={frame2} />
//           <img src={frame3} />
//         </div>
//       </div>

//       <div className="footer-container">
//         <h1>Quick Links</h1>
//         <a href="#">Features</a>
//         <a href="#">Contact</a>
//         <a href="#">AI optimizer</a>
//         <div>@ BuildON Inc. All rights reserve.</div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

'use client'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa6'
import to from '../Images/To.png'
import './Footer.css'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Use Case', href: '#' },
  ]

  const supportLinks = [
    { name: 'Contact', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Email', href: '#' },
  ]

  return (
    <footer className='footer-section'>
      <div className='footer-main container'>
        {/* Brand Section */}
        <div className='footer-brand'>
          <div className='footer-logo'>
            <img src={to} alt='FreelancerAI Logo' className='logo-img' />
          </div>
          <p className='footer-tagline'>The Working AI Proposal</p>
          <div className='social-links'>
            <a href='#' className='social-icon'>
              <FaLinkedinIn />
            </a>
            <a href='#' className='social-icon'>
              <FaInstagram />
            </a>
            <a href='#' className='social-icon'>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className='footer-grid'>
          <div className='footer-column'>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-column'>
            <h4>Support</h4>
            <ul>
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© BuildON Inc. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer