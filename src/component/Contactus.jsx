import React from 'react'
import { Link } from 'react-router-dom'
function Contactus() {
  return (
    <div>
      <section className="header">
      <div className="w-full bg-gray-900 text-white text-center py-8">  
           <div className="container mx-auto px-4">
              <h1 className="font-semibold text-6xl md:text-6xl text-s">Contact Us</h1>
              <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
                <Link to="/home" className="text-2xl text-yellow-400 hover:text-yellow-500 transition">home</Link>
                <em className="text-2xl not-italic text-md text-gray-200">/ contact</em>
              </div>
           </div>     
        </div> 
        </section>
        <section className="form">
       <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center flex-col md:flex-row">
              <div className="w-full mt-2">
                <img src=".\Svg\contact-img.svg" className="h-[600px] w-[600px]" alt="image-description" />
              </div>
              <div className="container mx-auto px-4 w-full">
              <form class="max-w-xl mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
                  <div class="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="name">
                    Name:
                  </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="name">
                    Phone:
                  </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your number" />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="email">
                    Email:
                  </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div class="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="feedback">
                    Feedback:
                  </label>
                      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your feedback"></textarea>
                  </div>
                  <div className="flex justify-center mt-5">
                    <button className="bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-semibold text-lg rounded-lg px-12 text-center py-2 dark:foucs:ring-yellow-900">Submit</button>
                  </div>
              </form>     
              </div>
          </div>
        </div>
       </section> 
    </div>
  )
}

export default Contactus
