import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <>
      <div className=' flex justify-center'>
        <div className=" container">
          {/* Breadcrumb */}
          <div className="flex w-full bg-gray-200 h-18 px-4 py-3">
            <h3 className="flex items-center text-sm sm:text-base">
              <Link href="/" className="text-gray-600">Home</Link>&nbsp; / &nbsp;About Us
            </h3>
          </div>

          {/* OUR HISTORY */}
          <div className="flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-16 lg:px-32 gap-10" data-aos="fade-up">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-blue-700 font-medium text-lg">OUR HISTORY</h1>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Creative and renovate fashion trends
              </h1>
              <p className="text-gray-700 font-medium mb-10 leading-relaxed">
                Collaboratively administrate empowered markets via plug-and-play maintain networks.
                Dynamically usable procrastinate B2B users after installed base benefits.
                Dramatically visualize customer directed convergence without revolutionary ROI.
              </p>

              <div className="flex flex-wrap gap-6">
                <h5><span className="text-blue-700 text-4xl font-semibold">12<br /></span>Years Experience</h5>
                <h5><span className="text-blue-700 text-4xl font-semibold">20K<br /></span>Happy Clients</h5>
                <h5><span className="text-blue-700 text-4xl font-semibold">100%<br /></span>Satisfaction</h5>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="src/assets/AboutUsSec/about_us_img_111.png" alt="Our History" className="w-full max-w-md rounded-lg" />
            </div>
          </div>

          {/* OUR VISION */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center py-16 px-6 md:px-16 lg:px-32 gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="src/assets/AboutUsSec/about_us_img_21.png" alt="Our Vision" className="w-full max-w-md rounded-lg" />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-blue-700 font-medium text-lg">Our Vision</h1>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">We are Marketpress</h1>
              <p className="text-gray-700 font-medium mb-10 leading-relaxed">
                Dynamically procrastinate B2C users after installed base benefits.
                Dramatically visualize customer directed convergence without revolutionary ROI.
              </p>

              <ul className="space-y-2 text-gray-800 font-medium">
                <li>✔ Credibly innovate granular internal</li>
                <li>✔ Grantedly underconstructions reloaded</li>
                <li>✔ Interactively procrastinate high-payoff</li>
                <li>✔ Completely synergize resource taxing relationships</li>
              </ul>
            </div>
          </div>

          {/* TEAM SECTION */}
          <div className="px-6 md:px-16 lg:px-32">
            <h1 className="text-blue-700 text-lg">ANGELS</h1>
            <h1 className="font-bold text-2xl md:text-3xl mb-8">Meet with our Team</h1>

            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { id: 1, img: "1.jpg", role: "FOUNDER", name: "Tarek" },
                { id: 2, img: "2.jpg", role: "CEO", name: "Marwan" },
                { id: 3, img: "3.jpg", role: "ADVISOR", name: "Tolba" },
                { id: 4, img: "4.jpg", role: "DESIGNER", name: "M.Kamel" },
                { id: 5, img: "2.jpg", role: "FOUNDER", name: "Marwan" },
                { id: 6, img: "3.jpg", role: "CEO", name: "Tolba" },
                { id: 7, img: "4.jpg", role: "ADVISOR", name: "M.Kamel" },
                { id: 8, img: "1.jpg", role: "DESIGNER", name: "Tarek" },
              ].map((member) => (
                <div key={member.id} className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  <div className="relative w-full h-72 overflow-hidden">
                    <img
                      src={`src/assets/AboutUsSec/${member.img}`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center justify-center gap-4 text-white">
                      <a href="#"><FaFacebookF /></a>
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaInstagram /></a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-blue-700 font-semibold">{member.role}</h3>
                    <p className="text-black font-bold">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 h-auto md:h-50 px-6 md:px-20 lg:px-52 mt-20 py-8 bg-gray-200">
            <div className="text-center md:text-left">
              <h1 className="font-semibold text-xl md:text-2xl">Newsletter & Get Updates</h1>
              <p className="text-sm text-gray-500">Sign up for our newsletter to get up-to-date from us</p>
            </div>

            <div className="flex w-full md:w-auto justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter Your Mail Here..."
                className="bg-white p-3 w-60 sm:w-72 md:w-80 rounded-l-lg border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700 transition"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
