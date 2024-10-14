import React from "react";
import Typical from "react-typical";
import Profile from "../../public/Profile.jpg";
import LI from "../../public/LI.png";
import GTHB from "../../public/GTHB.png";
import X from "../../public/X.png";
import MAIL from "../../public/MAIL.png";
import { Link } from "react-router-dom";


function Banner() {
  return (
    <>
      <div>
        <div className="hero m-2 bg-slate-300 min-h-screen rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={Profile} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Welcome, Zayed here</h1>
              <br />

              <div className="text-3xl">
                <h1>I am</h1>
                <b>
                  <Typical
                    steps={[
                      "Full-Stack Web Developer",
                      2000,
                      "Software Engineer",
                      2000,
                      "Backend Developer",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </b>
              </div>
              <br />
              <p className="text-2xl">
                Building modern, scalable web applications with a focus on clean
                code and performance.
              </p>

              <br />
              <div className="space-x-5">
                <Link to="https://www.linkedin.com/in/zayed-s-ansari-02z/">
              <button className="btn btn-primary">
                <img className='h-5 w-5'src={LI} alt="" />
                LinkedIn </button>
                </Link>

                <Link to="https://www.linkedin.com/in/zayed-s-ansari-02z/">
              <button className="btn btn-primary">
                <img className='h-5 w-5'src={GTHB} alt="" />
                Github </button>
                </Link>

                <Link to="https://x.com/zayedansar2002">
              <button className="btn btn-primary">
                <img className='h-5 w-5'src={X} alt="" />
                X </button>
                </Link>

                <Link to="">
              <button className="btn btn-primary">
                <img className='h-5 w-5'src={MAIL} alt="" />
                zayedans022@gmail.com </button>
                </Link>
                </div>
            </div>
          </div>
        </div>
        <br />

        <div className="hero rounded-lg md:m-5 bg-base-200 min-h-screen bg-green-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Software Engineer based in Mumbai, India.
              </h1>
              <br />

              <p className="py-6">
                <p className="text-xl"><b>Expertise in developing web apps using MERN stack. </b></p>
                    <br />
                <p className="text-blue-700">
                  Currently I am in Final Year of my B.E Computer Science.
                  <br />
                  During this course of my enginnering degree I have learned and
                  mastered various technologies such as React, MongoDB, NodeJs,
                  ExpressJs, System Design, C++ Programming and many other.
                </p>

                <p className="text-red-800">
                  Also I have made and developed various projects using these
                  technologies which helped my building web apps and other
                  projects much efficiently.
                </p>
                <br />

                <p>
                  Explore various aspects of me through the navigation bar given
                  on top
                </p>

                <h1>
                  If you have any queries feel free to contact me through any of
                  platforms.
                </h1>

                <p>
                  Want you build something? Let's collaborate and build
                  something amazing
                </p>
              </p>
              <Link to='/about'>
              <button className="btn btn-primary">Want to know me more!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
