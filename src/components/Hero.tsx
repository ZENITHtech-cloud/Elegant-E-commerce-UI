import React from 'react';
export function Hero() {
  return <div className="relative bg-gray-50 w-full">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Elevate Your Style
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
            Discover our new collection of timeless pieces designed for the
            modern lifestyle.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
            <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Elegant fashion model in modern clothing" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-gray-900">Summer Collection</p>
            <p className="text-gray-600">Up to 40% Off</p>
          </div>
        </div>
      </div>
    </div>;
}