import React from 'react'

export default function AboutUsCard() {
  return (
    <>
      <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img
        src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/05/team_11.png"
        alt="Sample"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center space-y-3 text-white">
        <a href="#" className="hover:underline">View Details</a>
        <a href="#" className="hover:underline">Visit Site</a>
      </div>
    </div>
    </>
  )
}
