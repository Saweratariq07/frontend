import React from 'react';

function Foodcard3() {
  return (
    <div className="mt-10 container mx-auto my-4 flex flex-col items-center">

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-4 auto-cols-fr">
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group  min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src=".\Image\email-icon.png" alt="Heineken logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Our Mail
          </h5>
          <a href="">usmanbahoo381@gmail.com</a>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group  min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src=".\Image\clock-icon.png" alt="Budweiser logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Opening Hours
          </h5>
          <a href="">06:00pm to 4:00am</a>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border  border-gray-200 hover:border-rose-600 rounded-2xl group  min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src=".\Image\map-icon.png" alt="Carlsberg logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-rose-600">
            Our Address
          </h5>
          <a href="">Bahawalpur, Pakistan-63100</a>
        </a>
        <a
          href=""
          className="flex flex-col items-center justify-center p-6 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 hover:border-rose-600 rounded-2xl group  min-h-[150px] transition-all duration-300"
        >
          <div className="mb-2 w-32 aspect-square flex items-center justify-center">
            <img className="max-w-full max-h-full object-contain" src=".\Image\phone-icon.png" alt="Stella Artois logo" />
          </div>
          <h5 className="text-center text-lg sm:text-base font-medium  text-gray-900 group-hover:text-rose-600">
            Our Number
          </h5>
          <a href="">0308-7976554</a>
        </a>
      </div>
    </div>
  );
}

export default Foodcard3;
