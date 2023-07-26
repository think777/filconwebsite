"use client"

import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import photo1 from "@/public/1.jpg";
import photo2 from "@/public/2.jpg";
import "react-alice-carousel/lib/alice-carousel.css";




const Carousel: React.FC = () => {
  return (
    <AliceCarousel autoPlay autoPlayInterval={3000} infinite animationType="slide" disableButtonsControls disableDotsControls>
            <Image src={photo1} alt="Image"/>
            <Image src={photo2} alt="Image"/>
        </AliceCarousel>

    );
};

export default Carousel