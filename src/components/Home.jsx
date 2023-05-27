import React, { useRef } from 'react'
import {animate, motion} from "framer-motion";
import  Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assests/logo.png"

const Home = () => {

    const clientCount = useRef(null);
    const ProjectCount = useRef(null);

    const animationClientCount = ()=> {
         animate(0 , 100 , {
            duration : 1 , 
            onUpdate : (v) => {
                (clientCount.current.textContent = v.toFixed())
            }
         })
    }
    const animationProjectCount = ()=> {
        animate(0 , 500 , {
           duration : 1 , 
           onUpdate : (v) => {
               (ProjectCount.current.textContent = v.toFixed())
           }
        })
   }
    const animations = {
        h1 : {
            initial :{ 
                x : "-100%",
                opacity:100,
            },
            whileInView : {
                x : 0,
                opacity : 1,
            },
        },
        button : {
            initial :{
                y : "-100%",
                opacity:100,
            },
            whileInView : {
                y : 0,
                opacity : 1,
            }
        }
    }
  return (
    <div id = "home">
    <section>
        <div>
        <motion.h1 {...animations.h1}>
            HI, IM <br /> Rajan Ravisaheb
        </motion.h1>
        
        <Typewriter        
        options = {{
            strings: ["A Developer" , "A Programmer" , "A Designer"],
            autoStart : true,
            loop : true,
            wrapperClassName : "typewriterpara" ,
        }} />

        <div>
            <a href="mailto : official.rajanv2103@gmail.com">
                Hire Me
            </a> 
            <a href="#work">
                Projects <BsArrowUpRight />
            </a>

            <article>
                <p>
                +<motion.span whileInView={animationClientCount} ref = {clientCount}>100</motion.span>
                </p>
                <span>Clients Wordwide</span>

            </article>

            <aside>
            <article>
                <p>
                +<motion.span whileInView={animationProjectCount} ref={ProjectCount}>500</motion.span>
                </p>
                <span>Projects Done</span>

            </article>

            <article data-special>
                <p>
                Contact
                </p>
                <span>official.rajanv2103@gmail.com</span>

            </article>
            </aside>
        </div>
        </div>
    </section>
 
    <section>
        <img src = {me} alt = "Rajan" />
    </section>
    <BsChevronDown />
    </div>
    
  )
}

export default Home