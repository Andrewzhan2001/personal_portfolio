import React from 'react'

import './Header.scss'
import {images} from '../../constants'
import { motion } from 'framer-motion'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div id = "home" className="app__header app__flex">
      <motion.div
        /* while the window open, change the x from -100 to 0 and opacity from 0 to 1 */
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div sytle={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Andrew</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Web developer</p>
            <p className='p-text'>UI/UX designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        /* delayChildren是显示他下面children标签的延迟，staggerChildren是每个children之间的延迟 */
        transition={{ duration: 0.5, delayChildren: 0.5 }} 
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header