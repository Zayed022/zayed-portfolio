import React from "react";
import Signature from "../../public/Signature.png";
import Expense from "../../public/Expense.png";
import Email from "../../public/Email.png";
import Validate from "../../public/Validate.png";
import KeyL from "../../public/KeyL.png";
import FF from "../../public/FF.png";
import ISA from "../../public/ISA.png";
import TM from "../../public/TM.png";
import MUA from "../../public/MUA.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Projects() {
  return (
    <>
      
      <div>
        <h1 className="text-3xl  text-yellow-800 flex justify-center items-center  ">
          <b>JavaScript Projects</b>
        </h1>

        <div className=" m-5 gap-7 justify-center md:flex">
          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={Signature} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">E-Signature App</h2>
              <p>A web app to allow user to digitally make their signature.</p>
              <div className="card-actions">
                <Link to="https://easysignature.netlify.app/">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={Expense} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Expense Tracker</h2>
              <p>A app that keeps a check on your daily expenses.</p>
              <div className="card-actions">
                <Link to="https://expense-tracker-byzayed.netlify.app/">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={Email} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Clicker Color</h2>
              <p>
                Based on your click the color of the background of the web
                changes
              </p>
              <div className="card-actions">
                <Link to="https://colour-changer-js.netlify.app/">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 gap-7 justify-center md:flex">
          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={Validate} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Email Validator</h2>
              <p>A simple web app that allows to validate email ID.</p>
              <div className="card-actions">
                <Link to="https://easysignature.netlify.app/">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={KeyL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Key Logger</h2>
              <p>A app that tracks your keyboards key movement.</p>
              <div className="card-actions">
                <Link to="https://keyylogger.netlify.app/">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl  text-yellow-800 flex justify-center items-center  ">
          <b>Frontend Projects</b>
        </h1>
        <div className=" m-5 gap-7 justify-center md:flex">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={FF} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Frontend of a financial application
              </h2>

              <div className="card-actions">
                <Link to="https://www.educative.io/verify-certificate/2R50XYCRy5oM4j15Yi07X3z0yn64u3">
                  <button className="btn btn-primary">Explore Now</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={TM} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Building a task manager using React.
              </h2>

              <div className="card-actions">
                <Link to="https://www.educative.io/verify-certificate/2R50XYCRy5oM4j15Yi07X3z0yn64u3">
                  <button className="btn btn-primary">Explore Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl  text-yellow-800 flex justify-center items-center  ">
          <b>MERN Stack Projects</b>
        </h1>
        <div className="m-5 gap-7 justify-center md:flex">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={ISA}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Image sharing App using MERN.</h2>
              
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={MUA}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Makeup Craft.</h2>
              <p>A web app for a client(Makeup Artist) to manage courses as well as services.
                Also integrated payment gateway for booking services along with date and time.
              </p>
              <div className="card-actions">
                <Link to='https://github.com/Zayed022/Makeupcraft'>
                <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <h1 className="text-3xl text-blue-700 px-3 py-2 justify-center item-center flex">And many more..</h1>
      </div>
      
    </>
  );
}

export default Projects;
