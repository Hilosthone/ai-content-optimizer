// import star1 from "../Images/Star1.png";

// function How() {
//   return (
//     <div className="how">
//       <div className="howHeading">How it works</div>
//       <div className="howList">
//         <div className="hl">
//           <img src={star1} />
//           <li>Paste Content</li>
//         </div>
//         <div className="hl">
//           <img src={star1} />
//           <li>Ai OPtimize it</li>
//         </div>
//         <div className="hl">
//           <img src={star1} />
//           <li>Schedule And Publish</li>
//         </div>
//       </div>
//       <h2 className="use">Use Cases</h2>
//       <div className="use-list">
//         <li>Content Creators</li>
//         <li>Social Media Managers</li>
//         <li>Freelancer</li>
//         <li>Brands</li>
//       </div>
//     </div>
//   );
// }
// export default How;

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Sparkles,
  Send,
  Users,
  Briefcase,
  Zap,
  Globe,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'
import './How.css'

function How() {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Content Intake',
      desc: 'Seamlessly import drafts from documents, URLs, or raw text into our centralized processing environment.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Neural Optimization',
      desc: 'Leverage advanced LLMs to calibrate brand voice, enhance semantic SEO, and maximize reader retention.',
    },
    {
      icon: <Send size={32} />,
      title: 'Omni-Channel Delivery',
      desc: 'Deploy synchronized content across LinkedIn, Twitter, and Instagram using data-driven scheduling.',
    },
  ]

  const clientSegments = [
    {
      title: 'Digital Creators',
      benefit: 'Scale output without compromising authenticity.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Social Media Teams',
      benefit: 'Streamline collaborative approvals and workflows.',
      icon: <Users size={24} />,
    },
    {
      title: 'Strategic Agencies',
      benefit: 'Deliver premium ROI for multiple client portfolios.',
      icon: <BarChart3 size={24} />,
    },
    {
      title: 'Enterprise Brands',
      benefit: 'Maintain global consistency across all regions.',
      icon: <Globe size={24} />,
    },
  ]

  return (
    <section className='how-section container'>
      {/* Workflow Section */}
      <div className='how-header'>
        <span className='section-tag'>System Architecture</span>
        <h2 className='how-heading'>Streamlined Workflow</h2>
        <div className='accent-line'></div>
      </div>

      <div className='how-grid'>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className='how-card'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className='icon-box'>{step.icon}</div>
            <h4 className='step-title'>{step.title}</h4>
            <p className='step-desc'>{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Professional "Who It Is For" Section */}
      <div className='audience-container'>
        <div className='audience-header'>
          <h3 className='audience-title'>Engineered for Excellence</h3>
          <p className='audience-subtitle'>
            Tailored solutions for every scale of content operations.
          </p>
        </div>

        <div className='audience-grid'>
          {clientSegments.map((segment, index) => (
            <motion.div
              key={index}
              className='audience-card'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='segment-top'>
                <div className='segment-icon'>{segment.icon}</div>
                <h4 className='segment-name'>{segment.title}</h4>
              </div>
              <p className='segment-benefit'>{segment.benefit}</p>
              <div className='segment-check'>
                <CheckCircle2 size={16} className='text-purple' />
                <span>Professional Grade</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default How