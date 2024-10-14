import React from 'react'
import { Link } from 'react-router-dom'
import LI from "../../public/LI.png";
import GTHB from "../../public/GTHB.png";
import X from "../../public/X.png";
import MAIL from "../../public/MAIL.png";

function Contact() {
  return (
    <div className='bg-slate-200 ml-2 mr-2 rounded-lg mb-10'>
      <h1 className="text-4xl text-green-400 flex item-center justify-center m-5"><b>Collaborate?</b></h1> <br />
        <h1 className="text-3xl text-green-400 flex item-center justify-center m-5 ">Get in touch with me on the following platforms</h1>
        <div className="space-x-5 flex-row justify-center item-center m-10 gap-5   space-y-5">
                <Link to="https://www.linkedin.com/in/zayed-s-ansari-02z/">
              <button className="btn btn-primary m-2 flex text-center item-center justify-center">
                <img className='h-5 w-5'src={LI} alt="" />
                LinkedIn </button>
                </Link>
                <br />

                <Link to="https://www.linkedin.com/in/zayed-s-ansari-02z/">
              <button className="btn btn-primary m-2 flex item-center justify-center">
                <img className='h-5 w-5'src={GTHB} alt="" />
                Github </button>
                </Link>
                <br />

                <Link to="https://x.com/zayedansar2002">
              <button className="btn btn-primary flex item-center justify-center m-2">
                <img className='h-5 w-5'src={X} alt="" />
                X </button>
                </Link>
                <br />

                <Link to="">
              <button className="btn btn-primary flex item-center justify-center m-2 mb-5">
                <img className='h-5 w-5'src={MAIL} alt="" />
                zayedans022@gmail.com </button>
                </Link>
                </div>
                <div className='text-center text-red-500 text-2xl'>
                    I will be extemely grateful and happy to work with you!! <br />
                    <b>Thank You.</b>
                </div>
      </div>
    
  )
}

export default Contact
