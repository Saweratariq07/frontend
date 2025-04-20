import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Order() {
  return (
    <div>
      <section className="header">
              <div className="w-full bg-gray-900 text-white text-center py-8">
                <div className="container mx-auto px-4">
                  <h1 className="font-semibold text-4xl md:text-6xl">Order</h1>
                  <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
                    <Link
                      to="/home"
                      className="text-xl md:text-2xl text-yellow-400 hover:text-yellow-500 transition capitalize"
                    >
                      Home
                    </Link>
                    <span className="text-xl md:text-2xl text-gray-200">/ order</span>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
}

export default Order;