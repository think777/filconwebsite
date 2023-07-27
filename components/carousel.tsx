

import Image from "next/image";

import photo1 from "@/public/1.jpg";


import Navbar from "./navbar";




const Carousel: React.FC = () => {
  return (
<div className="relative hero sm:h-[70vh] h-[60vh] flex items-center justify-center">
  <Image src={photo1} alt="Image" className="absolute inset-0 h-full w-full object-cover"/> 
  <div className="z-50 fixed flex top-0 w-full">
    <Navbar />
  </div>
  <div className="hero-overlay bg-opacity-80 bg-black z-10 flex items-center justify-center w-full h-full">
    <div className="hero-content text-center text-neutral-content sm:text-xl text-sm sm:mt-0 mt-[5vh] z-10">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">India's Largest Filtration Provider</h1>
        <p className="mb-5">
          Filter Pads also now available!
        </p>
      </div>
    </div>
  </div>
</div>


    );
};

export default Carousel