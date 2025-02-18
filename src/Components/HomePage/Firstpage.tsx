import React from "react";
import Image from "next/image";
import firstImage from "@/app/assets/images/Homepage/hospital.jpg"; 
import { FaStethoscope, FaHeart, FaUserMd } from "react-icons/fa"; 

const Firstpage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src={firstImage}
        alt="Modern Hospital"
        layout="fill"
        objectFit="cover"
        quality={75} 
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f60] opacity-70"></div>

      <div className="relative z-10 text-white p-8 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-extrabold text-6xl md:text-8xl mb-4 drop-shadow-md">
          Your Health, Our Priority
        </h1>
        <p className="font-medium text-xl md:text-3xl lg:text-4xl mb-8 drop-shadow-md">
          Providing Exceptional Care with Compassion and Expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-blue-400 mb-2 flex items-center justify-center">
              <FaStethoscope />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Cardiology</h3>
            <p className="text-gray-200">
              Expert care for all heart conditions.  Our cardiologists are leaders in the field.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-green-400 mb-2 flex items-center justify-center">
              <FaUserMd />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Neurology</h3>
            <p className="text-gray-200">
              Advanced diagnostics and treatment for neurological disorders. Experienced neurologists.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-red-400 mb-2 flex items-center justify-center">
              <FaHeart />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Emergency Care</h3>
            <p className="text-gray-200">
              24/7 emergency services with rapid response and expert medical teams. We are here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;