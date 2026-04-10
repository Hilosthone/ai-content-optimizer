// import optimizer from "../Images/OPTIMIZER.png";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src={optimizer} />
//       </div>
//       <div className="nav-links">
//         <a href="#">Features</a>
//         <a href="#">How it Works</a>
//         <a href="#">Use Case</a>
//       </div>
//       <div className="nav-btn">
//         <button>Try Now</button>
//       </div>
//     </div>
//   );
// }
// export default Navbar;

'use client'
import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Use Case', href: '#use-cases' },
  ]

  return (
    <nav className='nav-container'>
      <div className='nav-pill'>
        {/* LEFT: Text-based Logo */}
        <div className='nav-left'>
          <a href='/' className='logo-text'>
            freelan<span>cer</span>
          </a>
        </div>

        {/* CENTER: Desktop Links */}
        <div className='nav-center'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className='nav-link'>
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Action Button & Hamburger */}
        <div className='nav-right'>
          <a
            href='#upload'
            className='nav-cta-desktop'
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Try Now <ArrowRight size={16} />
          </a>

          <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='mobile-menu'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='#upload'
              className='nav-cta-mobile'
              style={{ textDecoration: 'none', textAlign: 'center' }}
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar