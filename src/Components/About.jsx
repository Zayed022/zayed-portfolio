import React from "react";
import Expense from "../../public/Expense.png";
import Signature from "../../public/Signature.png";
import Email from "../../public/Email.png";
import Cpp from "../../public/Cpp.png";
import JS from "../../public/JS.png";
import MERN from "../../public/MERN.jpeg";
import TS from "../../public/TS.png";
import Javascript from "../../public/Javascript.png";
import Git from "../../public/Git.png";
import System from "../../public/System.png";
import Razorpay from "../../public/Razorpay.jpeg";
import ReJs from "../../public/Rejs.jpeg";
import NoJs from "../../public/NoJs.jpeg";
import LI from "../../public/LI.png";
import GTHB from "../../public/GTHB.png";
import X from "../../public/X.png";
import MAIL from "../../public/MAIL.png";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <header
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?ga=GA1.1.1992656728.1724930232&semt=ais_hybrid)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Hey, I am Zayed Ansari
              </h1>
              <p>
                I'm an experienced full-stack developer specializing in building
                web applications using modern technologies like React, Node.js,
                and MongoDB. I love solving complex problems and am always
                looking for new challenges.
              </p>
             
            </div>
          </div>
        </header>
        <div className="bg-slate-200 rounded-lg mt-5 mr-2 ml-2 mb-5 ">
          <h1 className="text-3xl text-violet-800 text-center mb-5">
            <b>Have a look at my Educational Journey</b>
          </h1>

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2018</time>
                <div className="text-lg font-black">Completed S.S.C</div>
                In 2018, I completed my S.S.C from Dr. Omprakash Agarwal English
                High School, Bhiwandi under Maharashtra State Board of Secondary
                and Higher Secondary Eduaction. I have secured 88.40% in class X
                and have passed with distinction.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2020</time>
                <div className="text-lg font-black">Completed H.S.C</div>
                In year 2020, Pre-covid period, I have successfully completed
                and passed my H.S.C Exam from NES College Bhiwandi, under
                Maharashtra State Borad of Secondary and Higher Secondary
                Education. I have secured a percentage of 74.92% in XII.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2021-25</time>
                <div className="text-lg font-black">Graduation</div>
                In dec 2021, I had taken admission in Sinhagd Institute of
                Technology, Lonavala. Currently I am pursuing Computer
                Enginnering from this institution under Savitribai Phule Pune
                University. I have a overall GPA of 7.95 in my academics.
              </div>
              <hr />
            </li>
          </ul>
        </div>
        <div>
          <div className="hero bg-base-200 min-h-screen mt-5 mb-5 mr-2 ml-2 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEX///85jv8zi//1+f8tif8khv/b6f8Tgf9env+y0P/I2/+hxv9Ckv/4+/+71//O4f9Nlv+avv+Zw//i7f8Afv9Smf/t9P+ozP9xrf/U5//n8f9ko/9wp/+Etv9vqv9RnP+Puv+Bsf8Aev8Ac/8/vzP9AAALZUlEQVR4nO2d62KzIBKG5eQR8VTBc/Tb+7/HHUzaaqJtYlNDd31+tE2ihldgGIbBWtbBwcHBwcHBwcHBgQlk9qtL8Dyiphbk1YV4EqSl1M1eXYonIQuM4v+VhqbF5IcYAznEmMohxlQOMaZyiDGVQ4ypHGJMxXgxMrLDu499TIwdyU1F2ozsUe7dq+YxMeLE22pjsbZh54zy9M7vfGSmKVXMKI62l2wDsmUI4+G+g0lB766ZBGGEi31rxio7+FKa3ndw4DjDfdEZgTGi3e7GIhswQji461givDu1jPXyAsNXQePB+Jl9laQc6qV+SVCqGijUTXu3hf6WAL1Mi7ZSUDdIPety4nX1oiGDVtM+5ftlCn2fdTuPl7MS1NBhcfKEEoRK932+s02eUw4YY/6EliZy0FKLn1/oJ1Q9VA1Pf9jSiNJahpc7o7KHfsOK1ZYms9IXmshebUNhgiiihQELBfaAEFrxBapSDfUpz2MgdwsVLZfXg76Pu/I3S3kvWUuhMAvNXfSNC43wE5TXw0L/svlLfJhlZAuFuXY6y5ZD6UewHlwvLyjijX91aABOqwlt7EzYMWdeMzLBVPtuFGYKp6Lt07bOEaOjIOhh85LbjJ2M0QItTYipV0NErUcNjOPBi+xMEqACQxA0HI015KqZwRCeIW3sltDux2rhjSBXjlsovZrryoHu/jyf7jfxMINqyZOV6WLUx6CUsfQvqPE5DDy8EKtlJV6tTTFW5qvx4L7Tk/qyQ5e9HvB5YHhuQBVwPf5F39x0EulZN+oNsmELqHF+dYdtKms9T01MrpsSpgTXo8jaoQUMlfmL3eSvkIOulztnN5ULdXNPJb6GrIHixXfP1CSYPdaY2m3GSfwDEzXtkyFlZrfJOnAo7wukXUhBvGuE539N6IFf2T4UDpA6IGKkJyAHhuNr7/4boGHS+qVBjBUimL8MDxasAvOHnxZ4ex4hmDLuPXqWgDkBN8+gRc6WcGQGjoBjXtX0DG3wHMOEwfT/N8rzI3J8l092TXTClL8wJrtICY2/32Bkwx5maqZ5aAI/OGC+o/hDXsMuBBTHm26wn2PWP7kwP6VnON+0Rmy7mBbPLs0PGSjetk5UNZh2ZjmbpKN4mzdfFeBsmuXRkHqrGDkgalI80xrFoG2pCLIFMbvWTCkWmMYktZhuqxg8q5kqKm+xn9erPI6WmMRWSLO5zwwgZnIbPL7EtjFskd5Z0jJt6mGx2Zp14KB+3pWwY0vf5fQ/FvGOwhTfwqZLMi3D2ybAWQ2medJgFV38ruSHEj4hIrmlnw34CQyaD04zz5TgabbTNyK1gNjVF1UYbVtBFzFmdyZH7YaPEN7UFAI48eEJ6i9TcYzX18/XkQPG3LhoU6fd5scnNB7cBNe4YJNyEB4eNs46PfKJlupZVP8Qjh+eBMAEAP3bN730LhSb+QR3QaD70zvTN3clA8d5edwsPSGiketmaMM5Rm5HDQOMaLp0l3vHYY6G8V7OT6GI9QZWzDibx6el25x+uFjYmQ324MpgvsEE7gBJMWJLjQbE8K5pmq7m6G0yQFYNQ7g3LWh2ITrpLMvbG53qtcEMsGG+736+34I1dw00ZSPE08v7twEnENOc/wLjxT7ejnQO4d27I3YnVBzh26z/TzEpwuj93QyGGL5oMAwB5sAwblzfbJBw8rQjH+SIfViAwagssyX8GGzW9VRAW7PL7Bez9z4i9JumBZmvSHWqwtXQqcXQEea8T11sbSxu6tA0Boro1f4AbZpzjfu5fajHHx3JYCS0pdPc3qa35dZWHBvdYc6AU8/nqWQLYjyOmGnh8iVK6CFzK3UrphrAtdkU/9ib4nqp5lYMzC/pgqtgIEovok1LeiPmnJmxb6k2YoOb0mSWtN/pwTerPl5lxIrAv0bGRTEW0cvhzLNE/Q4MpPzjRd34lsf+wBhzwYay9qE32QMAg+bnC0+rdQyumHLqXVYxpoVUbxccBlrePvGgy8z3MGXfJajuSTjEfDJOyoKB70yyC2OfkdkHBPxlOt1cluX8lXvN5lQ1tKtJzkio2Kx/X1uzEvzNqbkDf465hoQ1yOhITl1lz8F8MiRei/E5dqbhZV93qt6IRdosAWuFZzEWnyI0mUJeiQm1LzMb/vWuRt4aUDdVq7Ot54E8X09q1sXAfBTNxIQ9WDkD9jbpkAxGV0HmiGM0Sde6EQPjztwxk73OVN/5mQY3VGm8kNP/jZgAYX4VlJF6jzbvXzr4yI5rLdd3VItJHxIzqsHopTZN5/Pj273NG8RAS9N7m+/Nvf8FAr1HbiEkuUXMuBcX+s2LYk9Vz/XzABbu5Tdi1KIYbUv0cxpe0m9ko32uxTtZ5rOtMVdiYJBdFDMGPF/jCxAYXxBdzgIZl1289wlM2c7mM7bIMV0psU6OpN3ugQ5tk6GNLX9Iemgv7J3L7tOPl0x3jZWOPq5+7L17S+qk1/XeGrkML+YOXbYH16ux/5Ti3aO2ZU4pWv/OUDTLiVAjvFhfxyAJp3s/EagaEE++8j4yoYIVlP/ViURxvvfmLdv7OjenEt4q4stWFApv963C4ZdfmA3xOvybLUMGzaFH9HOKVqHbMqBfhl0767wZuwVwhcr/gj+mxQrJF5jWKb6BJJjRFRg1MyljlS8NwMYtEC8jyh22imNKkOxOQn8h3/YD/691mjJapTQmFnsfMnHXyZ/xDLEd8flS3viFv+YBfGMADF6cWSL6ygD8rYr538NOF/mb1VL9W+owJmYx30O85NLgV5dqI6mzsKvH/FSmZTJ0u3ls58DLEyntG/7YCHNwcHBwcHBwcHDwf8/7mkT4sTZBpCT66cWX1+dPpZShfk+/vpwXjn+ef5Pxz/OJ5yu+n0/0ifCmvFzpNwmDYRjaoCJeOxStklbot13Tl1bWwQepbVn9oKxKFU0RhOXQ23Y/ZgpVfVvKNCHwcVS1w9C1YdV3TesTMWg8H350yvIHONGGizb6lF+eyYUNwy6miexp3HCa6owAN6ZNaP/DMcddFeZssBTiLnJEFmPl0UavlNsxElWHhRVjYXOa113YM+7iXAQ5ZihOA4ZqVxH4yGWDDPB/xlN+WUxH46x1GjulfaWomwmc+wnmdvYWK+9Eo/BEW9I6Q9Q4hTXgtnfGrF8756IqaE1yJKCUQSbliQ5RzdISfrSRnbI6qkL/jXsei22F/o2n/LqY3PKcOkoY1ArOIy3IQ7jM3nJfds4oRhZOUiWn1vJ5np8TZc9iMIrcUYxnWVlMe9kxaIQFXIokTNdg4MS2z89istMOYmL7XDNtlNJGnsXQCGoGxLydxXROQmRWWbKhlwSmsxjE+nPNDEEFYhLZ6ZSgi5g89Ucx0veJQo4X8N8XgzGncD97xGMda5mKqSZiIiF8MBfssqv8IgbFSIvBY4eai9H/gALEnB+oEZyTbH5fDB+GQMoe1wWNrXBFTJ/G2NUPpLxschrFdHHCRzGoa+0bMXEvJmJYO+xQM9BnLJ2jxYIyZnMx02Zmt3pPts0uST0XMfoB2mOfCcFYXTUz/Xgk3czAmFdjn9nHAJzFpFXniPdmNhqAamIASIrrWzEELLAWo0KryrUYNhejtAFgtNzLmrH4XUzYO70lUCxgzMnsf2Cac2RrMfBBJ4qFmuEywiCGazGyZkPk0oBYIF2LcSObRA5SAXOzncQU6DSKSXFqKdyRqkMx571lO2AQ4l6GNW4tUJXXXNcMbi5i3BgMQCwtl0PNjDvnFYcz9D9qGWDsJSmK3TwNaxTncSAVfxtP+V0xllDjbpEwUpGVKZVZtkpTAVY4UEr5Uh/gW8RPg9Lz9L/6u6SlSU9lRCgCH9tSKZ1RRkSaeDqNRgSRvp5SgQ+XTFO4SqlSfcor8gW2+oOLOWt/LEfg4ODg4ODg4ODg4OBl/BchgMv7VbSfRwAAAABJRU5ErkJggg=="
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold text-blue-700">Experience</h1>
                <p className="py-6 text-xl text-red-400">
                  I have worked as an Software Developer Intern at Prodigy
                  Infotech for the duration of 4 weeks. <br />
                  During this Internship I have been provided with various
                  tasks, projects and other technical work. <br />
                  By doing so it has enhanced and smoothen my knowledge of how
                  large scale applications are build. <br />
                  Also I have made and deployed various application for the
                  clients which gave me valuable experience.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-center text-violet-600 mt-8 mb-8">
            <b>
              During my Engineering I have developed and deployed many projects.
              Have a look at them.
            </b>
          </h1>
          <div className=" m-5 mr-2 space-y-5 item-center justify-center  md:flex item-center justify-center  ">
            <div className="card bg-base-100 w-96 shadow-xl m-5 flex hover:scale-105">
              <figure>
                <img src={Expense} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Expense Tracker App!</h2>
                <p>
                  A simple app that helps you to keep a check on your expenses
                </p>
                <div className="card-actions justify-end">
                  <Link to="https://expense-tracker-byzayed.netlify.app/">
                    <button className="btn btn-primary">Explore </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl flex hover:scale-105">
              <figure>
                <img src={Signature} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Signature App!</h2>
                <p>A simple e-signature app.</p>
                <div className="card-actions justify-end">
                  <Link to="https://easysignature.netlify.app/">
                    <button className="btn btn-primary">Explore</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl flex m-5 hover:scale-105">
              <figure>
                <img src={Email} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Colour Changer App!</h2>
                <p>A simple app that changes colour upon your click.</p>
                <div className="card-actions justify-end">
                  <Link to="https://colour-changer-js.netlify.app/">
                    <button className="btn btn-primary">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center g-5  mt-10 mb-10">
            <Link to="/projects">
              <button className="btn btn-primary text-center items-center justify-center content-center">
                Explore more projects
              </button>
            </Link>
          </div>
        </div>

          <h1 className="text-5xl item-center justify-center flex text-violet-700 "><b>Skills</b></h1><br />
        <div className="justify-center item-center m-2 mb-2 mt-2 space-y-4   shadow-2xl md:flex md:gap-5">
          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={Cpp}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">C++ Programming</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={MERN}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">MERN Stack</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={Javascript}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">JavaScript</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>
        </div>

        <div className="justify-center item-center m-2 mb-2 mt-2 space-y-4 shadow-2xl md:flex md:gap-5">
          
          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={Git}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">Git & Github</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={TS}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">TypeScript</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={System}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">System Design</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>
        </div>

        <div className="justify-center item-center m-2 mb-10 mt-2 space-y-4  shadow-2xl md:flex md:gap-5">
          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={Razorpay}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">Payment Integration</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={ReJs}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">Frontend Development</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>

          <div className="card bg-base-100 image-full w-96  shadow-xl">
            <figure>
              <img
                src={NoJs}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title item-center flex justify-center">Backend Development</h2>
              {/*}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {*/}
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-green-400 flex item-center justify-center m-5"><b>Collaborate?</b></h1> <br />
        <h1 className="text-3xl text-green-400 flex item-center justify-center m-5">Get in touch with me on the following platforms</h1>
        <div className="space-x-5 flex justify-center item-center m-8">
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
    </>
  );
}

export default About;
