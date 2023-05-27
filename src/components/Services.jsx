import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle , AiFillAndroid , AiFillWindows} from "react-icons/ai"
const Services = () => {
  return (
    <div id="services">
        <h2>Services</h2>
        <section>
            <motion.div className='serviceBox1'>
               <h3>5+</h3>
               <p>Experience</p>
            </motion.div>
            <motion.div className='serviceBox2'>
              <AiFillIeCircle/>
              <span>Web Development</span>
            </motion.div>
            <motion.div className='serviceBox2'>
              <AiFillAndroid/>
              <span>App Development</span>
            </motion.div>
            <motion.div className='serviceBox2'>
              <AiFillWindows />
              <span>Services Development</span>
            </motion.div>
        </section>
    </div>                                          
  )
}

export default Services
