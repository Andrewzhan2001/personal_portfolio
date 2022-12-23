import React,{useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false) // false初始化这个state，退出函数时state会保留
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"/>
      </div>
      {/* unordered list, will loop through all the element in the navigation bar*/}
      <ul className="app__navbar-links"> 
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          /* use  `` as the template string, list tag*/
          <li className="app__flex p-text" key={`link-${item}`}> {/* make unique key */}
            <div /> {/* this just for the css formating */}
            {/* a tag for the hyperlink, will lead to that section of the page */}
            <a href={`#${item}`}>{item}</a>

          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        { // dynamic code block, if toggle is true, render following navigation bar
          toggle && ( // jsx grammer, conditional rendering
            <motion.div // use framer motion
              whileInView={{ x: [300, 0] }} // 当我们看见这个navbar的时候x是300
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar