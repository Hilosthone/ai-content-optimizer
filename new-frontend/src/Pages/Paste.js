// function Paste() {
//   return (
//     <div className="paste">
//       <h1>Paste your Content</h1>
//       <textarea placeholder="Paste your caption, tweet, blog or blog content here"></textarea>
//       <p className="q">Select Tone</p>
//       <div className="dropdown-container">
//         <select>
//           <option>Professional</option>
//           <option>Friendly</option>
//           <option>Formal</option>
//           <option>Assertive</option>
//         </select>

//         <select>
//           <option>Platform</option>
//           <option>Short</option>
//           <option>Meduim</option>
//           <option>Detailed</option>
//         </select>

//         <select>
//           <option>Audience</option>
//           <option>Accept</option>
//           <option>Decline</option>
//           <option>Request clarification</option>
//           <option>Follow Up</option>
//         </select>
//       </div>
//       <div>
//         <button className="b3">Optimize & Schedule</button>
//       </div>
//     </div>
//   );
// }
// export default Paste;

'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Loader2,
  ChevronDown,
  CheckCircle,
  Calendar,
  BarChart3,
  Zap,
} from 'lucide-react'
import './Paste.css'

function Paste() {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin')
  const [platforms, setPlatforms] = useState([])
  const [result, setResult] = useState(null)

  useEffect(() => {
    fetch('https://ai-content-optimizer.onrender.com/platforms')
      .then((res) => res.json())
      .then((data) => setPlatforms(data.platforms))
      .catch((err) => console.error('Platform fetch failed:', err))
  }, [])

  const handleOptimize = async () => {
    if (!content) return
    setLoading(true)
    setResult(null)
    try {
      const response = await fetch(
        'https://ai-content-optimizer.onrender.com/optimize',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content, platform: selectedPlatform }),
        },
      )
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Optimization error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='upload' className='paste-section'>
      <motion.div
        className='paste-card'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='card-header'>
          <Sparkles className='icon-purple' size={24} />
          <h2>AI Content Optimizer</h2>
        </div>

        <textarea
          placeholder='Paste your raw caption or article here...'
          className='premium-textarea'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className='options-grid'>
          <div className='select-wrapper'>
            <label>Target Platform</label>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map((p) => (
                <option key={p} value={p}>
                  {p.toUpperCase()}
                </option>
              ))}
            </select>
            <ChevronDown className='select-icon' size={16} />
          </div>

          <div className='select-wrapper'>
            <label>Optimization Goal</label>
            <select>
              <option>Maximum Engagement</option>
              <option>SEO Visibility</option>
              <option>Professional Tone</option>
            </select>
            <ChevronDown className='select-icon' size={16} />
          </div>

          <div className='select-wrapper'>
            <label>AI Model</label>
            <select>
              <option>Neural Pro (Default)</option>
              <option>GPT-4 Turbo</option>
            </select>
            <ChevronDown className='select-icon' size={16} />
          </div>
        </div>

        <button
          className={`btn-optimize ${loading ? 'loading' : ''}`}
          onClick={handleOptimize}
          disabled={loading || !content}
        >
          {loading ? (
            <>
              <Loader2 className='animate-spin' size={20} /> Processing...
            </>
          ) : (
            <>
              <Zap size={18} /> Optimize & Analyze
            </>
          )}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              className='api-response-container'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <div className='response-section main-result'>
                <div className='section-title'>
                  <CheckCircle size={18} /> Optimized Version
                </div>
                <div className='optimized-box'>
                  <p>{result.seo.optimized_content}</p>
                </div>
              </div>
              <div className='analytics-grid'>
                <div className='response-section'>
                  <div className='section-title'>
                    <BarChart3 size={18} /> SEO Keywords
                  </div>
                  <div className='tag-cloud'>
                    {result.seo.keywords.map((k, i) => (
                      <span key={i} className='keyword-tag'>
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='response-section'>
                  <div className='section-title'>
                    <Calendar size={18} /> Posting Schedule
                  </div>
                  <ul className='time-list'>
                    {result.posting_schedule.best_times.map((time, i) => (
                      <li key={i}>• {time}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Paste