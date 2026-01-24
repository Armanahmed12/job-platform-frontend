import React from "react";
import officeColleges from '../../assets/office-workers.avif'
import img_chart from "../../assets/img-chart.png"
import controlCardImg from "../../assets/img-chart.png"

const CareerHighlight = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT: Image Group */}
       <div className="relative flex justify-center">
        
        {/* Main Image */}
        <img
          src={officeColleges}
          alt="Career opportunities"
          className="rounded-2xl w-full max-w-md object-cover shadow-xl"
        />

        {/* Floating Image 1 (Top Left) */}
        <img
          src={img_chart}
          alt="Career stats preview"
          className="absolute -top-15 -left-15 max-w-3/5 md:block rounded-xl"
        />

        {/* Floating Image 2 (Bottom Right) */}
        <img
          src={controlCardImg}
          alt="Job feature preview"
          className="absolute -bottom-30 -right-15 max-w-3/5 hidden md:block rounded-xl"
        />
      </div>

      {/* RIGHT: Text Content */}
      <div>
        <p className="text-gray-500 font-semibold text-2xl mb-2">Millions Of Jobs.</p>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          Find The One That’s{" "}
          <span className="text-blue-600">Right</span> For You
        </h1>

        <p className="mt-6 text-gray-600 max-w-lg">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 600,000 companies worldwide.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Search Jobs
          </button>

          <button className="text-red-600 font-medium hover:underline underline">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
};

export default CareerHighlight;
