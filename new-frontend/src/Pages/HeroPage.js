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
import avartar from '../Images/avartar.png'
import './HeroPage.css'

function HeroPage() {
  return (
    <section className='hero-section'>
      <div className='hero-container container'>
        {/* Left Side: Content */}
        <motion.div
          className='hero-content'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className='badge'>AI OPTIMIZER</div>
          <h1 className='hero-title'>
            Optimize & grow your content{' '}
            <span className='gradient-text'>with AI</span>
          </h1>
          <p className='hero-subtitle'>
            Improve SEO readability and engagement while scheduling posts at the
            perfect time to maximize impact.
          </p>
          <div className='hero-actions'>
            <button className='btn-primary-xl'>
              <Zap size={22} strokeWidth={2.5} /> Optimize Content
            </button>
            <button className='btn-secondary-xl'>
              <Play size={22} fill='white' /> View Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side: Circular Visual */}
        <motion.div
          className='hero-visual'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='circular-frame'>
            <div className='inner-glow'></div>
            <img src={avartar} alt='AI Avatar' className='hero-avatar-img' />

            <div className='floating-elements'>
              <div className='float-box fb-1'>SEO</div>
              <div className='float-box fb-2'>Reach</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPage