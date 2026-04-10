'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Activity, Globe, Zap, Layers } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: <Shield size={22} />,
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption for all drafts.',
    size: 'large',
  },
  {
    icon: <Activity size={22} />,
    title: 'Live Analytics',
    desc: 'Real-time engagement tracking.',
    size: 'small',
  },
  {
    icon: <Globe size={22} />,
    title: 'Global Scale',
    desc: 'Localize content for 40+ languages.',
    size: 'small',
  },
  {
    icon: <Zap size={22} />,
    title: 'Smart Logic',
    desc: 'AI-driven posting for peak activity.',
    size: 'medium',
  },
  {
    icon: <Layers size={22} />,
    title: 'Unified Sync',
    desc: 'Manage all platforms in one dashboard.',
    size: 'medium',
  },
]

export default function Features() {
  return (
    <section className='features-section'>
      <div className='features-header'>
        <h2 className='features-title'>
          Core <span className='purple-text'>Features</span>
        </h2>
        <p className='features-subtitle'>
          Powerful infrastructure for high-growth social operations.
        </p>
      </div>

      <div className='bento-grid'>
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={`bento-card ${f.size}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className='icon-wrap'>{f.icon}</div>
            <div className='card-info'>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
            <div className='glow' />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
