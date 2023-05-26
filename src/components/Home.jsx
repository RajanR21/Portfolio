import React from 'react'
import {motion} from "framer-motion";
import  Typewriter from "typewriter-effect";
import {BsArrowUpRight} from "react-icons/bs"

const Home = () => {
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
                +<span>100</span>
                </p>
                <span>Clients Wordwide</span>

            </article>

            <aside>
            <article>
                <p>
                +<span>500</span>
                </p>
                <span>Projects Made</span>

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
    </div>
    
  )
}

export default Home