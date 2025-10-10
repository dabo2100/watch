import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsCard from '../components/AboutUsCard'
import { FaCheck } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <>
    <div className='flex flex-col'>
        <div className='flex w-full bg-gray-200 h-18'>
            <h3 className='flex pl-50 items-center'>
                <a href="/HomePage" className='text-gray-600'>Home  </a> > About Us
            </h3>
        </div>

        {/* OUR HISTORY */}

        <div className='flex flex-row justify-between py-32  px-52 '>

            <div className='w-1/2'>
                <h1 className='text-blue-700 font-medium'>OUR HISTORY</h1>
                <h1 className='text-[40px] font-bold'>Creative and renovate fashion trends</h1>

                <p className='text-gray-700 font-medium pb-20'>Collaboratively administrate empowered markets via plug-and-play maintain <br /> networks.
                     Dynamically usable procrastinate B2B
                     users after installed base <br /> benefits. Dramatically visualize customer directed 
                     convergence without <br /> revolutionary ROI.</p>
                

                <div className='flex flex-row gap-10 pl-3'>
                    <h5><span className='text-blue-700 text-5xl font-semibold'>12 <br/>
                </span> Years Experience</h5>
                
                <h5><span className='text-blue-700 text-5xl font-semibold'>20K <br/>
                </span> Years Experience</h5>

                <h5><span className='text-blue-700 text-5xl font-semibold'>100%<br/>
                </span> Years Experience</h5>
                </div>

            </div>
            {/* OUR HISTORY Img */}
            <div>
                <img src="src/assets/AboutUsSec/about_us_img_111.png" alt="" className='pt-3' />
            </div>
            {/* end of OUR HISTORY */}

            {/* Start of Our vision */}

        </div>

        <div className='flex flex-row justify-between py-20  px-52 gap-10 '>

            {/* Our vision img */}
            <div>
                <img src="src/assets/AboutUsSec/about_us_img_21.png" alt="" className='pt-3' />
            </div>
            {/* our vision text */}
            <div className='w-1/2'>
                <h1 className='text-blue-700 font-medium'>Our vision</h1>
                <h1 className='text-[40px] font-bold'>We are marketpress</h1>

                <p className='text-gray-700 font-medium pb-20'>Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize customer directed
                    convergence without revolutionary ROI.</p>
                
                <ul>
                    <li>✔Credibly innovate granular internal</li>
                    <li>✔Grantedly underconstructions reloaded</li>
                    <li>✔Interactively procrastinate high-payoff</li>
                    <li>✔Completely synergize resource taxing relationships</li>
                </ul>

            </div>
        </div>
        {/* end of our vision */}

        {/* START OF ANGLES */}
        <div className='px-52'>
            <h1 className='text-blue-700'>ANGELS</h1>
            <h1 h1 className='font-bold text-3xl mb-8'>Meet with our Team</h1>

        <div className='grid grid-cols-4 gap-5'>
        {/* CARD 1 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/1.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">FOUNDER</h3>
            <p className="text-black font-bold">Tony Williamson</p>
        </div>
        </div>

        {/* CARD 2 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/2.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">CEO</h3>
            <p className="text-black font-bold">William Hanah</p>
        </div>
        </div>

        {/* CARD 3 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/3.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">ADVISOR</h3>
            <p className="text-black font-bold">JInglo Jelian</p>
        </div>
        </div>

        {/* CARD 4 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/4.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">DESIGNER</h3>
            <p className="text-black font-bold">Jony Smith</p>
        </div>
        </div>

        {/* CARD 5 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/2.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">FOUNDER</h3>
            <p className="text-black font-bold">Tony Williamson</p>
        </div>
        </div>

        {/* CARD 6 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/3.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">CEO</h3>
            <p className="text-black font-bold">William Hanah</p>
        </div>
        </div>

        {/* CARD 7 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/4.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">ADVISOR</h3>
            <p className="text-black font-bold">JInglo Jelian</p>
        </div>
        </div>

        {/* CARD 8 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-64 overflow-hidden">
        <img
          src="src/assets/AboutUsSec/1.png"
          alt="Sample"
          className="w-full h-[400px] object-cover transition-transform duration-500"/>

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-60 transition-opacity duration-500 flex flex-row items-center justify-center gap-3 text-white">
                <a href="#" className=""><FaFacebookF/></a>
                <a href="#" className=""><FaTwitter/></a>
                <a href="#" className=""><FaInstagram/></a>
            </div>
        </div>

        {/* TEXT BELOW */}
        <div className="p-3 text-center">
            <h3 className="text-blue-700 font-semibold">DESIGNER</h3>
            <p className="text-black font-bold">Jony Smith</p>
        </div>
        </div>

  </div>


</div>
{/* end of angels */}

    <div className='flex flex-row justify-between items-center h-50 px-52 mt-30 bg-gray-200'>

        {/* location */}

        <div>
            <h1 className='font-semibold text-2xl'>Newsletter & Get Updates</h1>
            <p className='text-sm text-gray-500'>Sign up for our newsletter to get up-to-date from us</p>
        </div>

        {/* email-input */}

        <div className='flex' >
            <input type="email" placeholder='Enter Your Mail Here....' className='bg-white p-5 w-80 h-10' />
            <button type="submit" className='btn btn-info hover:btn-success h-10'>SUBMIT</button>
        </div>
    </div>

    <Footer />
    </div>
    </>
  )
}
