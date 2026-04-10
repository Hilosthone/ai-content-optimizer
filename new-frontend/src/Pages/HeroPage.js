// function HeroPage() {
//   return (
//     <div className="hero">
//       <h1>
//         Optimize, Schedule and grow your content <span>with AI</span>
//       </h1>
//       <p>
//         Improve SEO readability and engagement the schedule your posts at the
//         perfect time
//       </p>
//       <div className="hero-btn">
//         <button className="upload-docs">Optimize Content</button>
//         <button className="try-demo">View demo</button>
//       </div>
//     </div>
//   );
// }
// export default HeroPage;

// 'use client'
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Zap, Play } from 'lucide-react'
// import avartar from '../Images/avartar.png'
// import './HeroPage.css'

// function HeroPage() {
//   return (
//     <section className='hero-section'>
//       <div className='hero-container container'>

//         {/* Left Side: Content */}
//         <motion.div
//           className='hero-content'
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <div className='badge'>AI OPTIMIZER</div>
//           <h1 className='hero-title'>
//             Optimize & grow your content <span className='gradient-text'>with AI</span>
//           </h1>
//           <p className='hero-subtitle'>
//             Improve SEO readability and engagement while scheduling posts at
//             the perfect time to maximize impact.
//           </p>
//           <div className='hero-actions'>
//             <button className='btn-primary-large'>
//               <Zap size={20} /> Optimize Content
//             </button>
//             <button className='btn-secondary-large'>
//               <Play size={20} /> View Demo
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Side: Circular Visual */}
//         <motion.div
//           className='hero-visual'
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className='circular-frame'>
//             <div className='inner-glow'></div>
//             <img src={avartar} alt="AI Avatar" className="hero-avatar-img" />

//             <div className='floating-elements'>
//               <div className='float-box fb-1'>SEO</div>
//               <div className='float-box fb-2'>Reach</div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default HeroPage;

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Play } from 'lucide-react'
import './HeroPage.css'

function HeroPage() {
  return (
    <section className='hero-section'>
      {/* Background Ambient Glows */}
      <div className='ambient-glow glow-1'></div>
      <div className='ambient-glow glow-2'></div>

      <div className='hero-container container'>
        <motion.div
          className='hero-content-centered'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='badge'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Zap size={14} className='icon-purple' />
            AI-POWERED OPTIMIZATION
          </motion.div>

          <h1 className='hero-title'>
            Optimize, Schedule And <br />
            Grow Your Content <span className='gradient-text'>With AI</span>
          </h1>

          <p className='hero-subtitle'>
            Improve SEO readability and engagement while scheduling your posts
            at the perfect time to maximize your digital impact.
          </p>

          <div className='hero-actions'>
            <a href='#upload' className='btn-primary-xl'>
              <Zap size={20} fill='currentColor' /> Optimize Content
            </a>
            <button className='btn-secondary-xl'>
              <Play size={20} fill='currentColor' /> View Demo
            </button>
          </div>

          {/* Floating Feature Tags */}
          <div className='hero-trust-tags'>
            <span>SEO Optimized</span>
            <span className='dot'>•</span>
            <span>Smart Scheduling</span>
            <span className='dot'>•</span>
            <span>Tone Analysis</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPage