import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from "../assests/data.json"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactLogo from "../assests/react__logo.png"
import CssLogo from "../assests/css__logo.png"
import HtmlLogo from "../assests/html__logo.png"
import JsLogo from "../assests/js__logo.png";
import NodeJsLogo from "../assests/nodejs__logo.png";
import MongoDBLogo from "../assests/mongodb__logo.png";
import MaterialUILogo from "../assests/mui__logo.png";
import ReduxLogo from "../assests/redux__logo.png";


const Work = () => {
  return (
    <div id='work'>
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel 
                showArrows = {false}
                showIndicators = {false}
                showStatus = {false}
                showThumbs = {false}
                interval={2000}
                infiniteLoop={true}
                autoPlay={true}

                >
                    {
                        data.projects.map(i => (
                            <div key = {i.title} className='workItem'>
                            <img src={i.imgSrc} alt={i.title} />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
            <div className="tech__stack__outer">
              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={MongoDBLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MongoDB</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={ReactLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">ReactJs</div>
              </div>
              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={CssLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">CSS</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={NodeJsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">NodeJs</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={MaterialUILogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MaterialUI</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={HtmlLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">HTML5</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={JsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">JS</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={ReduxLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">Redux</div>
              </div>
            </div>
                                <a target={"blank"} href={i.url} >View Demo</a>
       
                            </aside>

                            </div>
                        ))

                    }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work