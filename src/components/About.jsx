import React from "react";

import AboutImage from "../assests/about1.jpg";
import Resume from "../assests/my_resume.pdf";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import "../styles/about.css"
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="m-t-4">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImage} alt="about_image_alt" className="about__img" />

          <div className="about__data">
            <div className="about__info">
              <div className="about__info__box">
                <AccountBalanceRoundedIcon className="about__info-icon" />
                <span className="about__info-name">University</span>
                <span className="about__info-description">
                  Dharmsinh Desai University
                </span>
              </div>
              <div className="about__info__box">
                <WorkspacePremiumRoundedIcon className="about__info-icon" />
                <span className="about__info-name">Degree</span>
                <span className="about__info-description">
                Electronics And Communication Engineering
                </span>
              </div>
              <div className="about__info__box">
                <SchoolRoundedIcon className="about__info-icon" />
                <span className="about__info-name">Passout</span>
                <span className="about__info-description">May 2024</span>
              </div>
              <div className="about__info__box">
                <HouseRoundedIcon className="about__info-icon" />
                <span className="about__info-name">Locality</span>
                <span className="about__info-description">Rajkot,Gujarat</span>
              </div>
            </div>

            <p className="about__description">
              I'm a pre-final year student. Currently pursuing B.Tech. in
              Computer Engineering from Dharmsinh Desai University, Nadiad. I'm
              a Full-Stack Dev. enthusiast working with MERN Stack. I am
              interested in Problem Solving and Competitive Coding as well which
              helps me put my ideas clearly and push me to optimize my coding
              techniques.
            </p>

            <div className="resume__link__outer">
              <a href={Resume} download className="resume__link">
                Download Resume
                <DescriptionRoundedIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;