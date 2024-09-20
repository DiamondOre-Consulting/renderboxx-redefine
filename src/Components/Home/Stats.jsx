import React from "react";
import trishul from '../../assets/trishul.png'

const Stats = () => {
  return (
    <>
      <div className="w-full">
        <div className="py-10  px-2 md:px-20 flex flex-col  md:justify-between mx-auto items-center">
          <h1 className="text-5xl font-semibold text-center headings">
            Legacy moving forward
          </h1>
          <div className='w-60 h-1 mx-auto bg-black mt-4'></div>
          <p className="text-gray-600 mt-6 text-center text-gray-800 px-10 md:px-0">
            In a considerably short period of time, Ace has achieved excellence,
            client satisfaction, and trust and has efficiently completed
            landmark projects without compromising on quality and timelines.
          </p>

          {/* Responsive Grid Container for Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto cursor-pointer justify-center gap-10 mt-10">
            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-72 p-6 bg-white shadow-lg rounded-lg transform transition hover:bg-primary hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out group">
              <svg
                className="w-10 h-10 mb-2 text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
              <div className="text-center">
                <p className="font-bold text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">
                  17+
                </p>
                <p className="text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Years old legacy
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-72 p-6 bg-white shadow-lg rounded-lg transform transition hover:bg-primary hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out group">
              <svg
                className="w-10 h-10 mb-2 text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
              <div className="text-center">
                <p className="font-bold text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">
                  12
                </p>
                <p className="text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Million sq. ft. of Projects Delivered
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-72 p-6 bg-white shadow-lg rounded-lg transform transition hover:bg-primary hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out group">
              <svg
                className="w-10 h-10 mb-2 text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <div className="text-center">
                <p className="font-bold text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">
                  17
                </p>
                <p className="text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Million sq. ft. of Ongoing projects
                </p>
              </div>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col justify-center items-center w-72 p-6 bg-white shadow-lg rounded-lg transform transition hover:bg-primary hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out group">
              <svg
                className="w-10 h-10 mb-2 text-primary transition-colors duration-300 ease-in-out group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <div className="text-center">
                <p className="font-bold text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">
                  1000+
                </p>
                <p className="text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto">
          {/* <img src={trishul} alt="" className="mx-auto md:px-0 px-10"/> */}
        </div>
      </div>
    </>
  );
};

export default Stats;
