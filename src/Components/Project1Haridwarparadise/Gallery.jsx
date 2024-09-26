import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

// Import only the images you are using
import g1 from "../../assets/haridwargallery/1.jpg";
import g2 from "../../assets/haridwargallery/2.jpg";
import g3 from "../../assets/haridwargallery/3.jpg";
import g4 from "../../assets/haridwargallery/4.jpg";
import g5 from "../../assets/haridwargallery/5.jpg";
import g6 from "../../assets/haridwargallery/6.jpg";
import g7 from "../../assets/haridwargallery/7.jpg";
import g8 from "../../assets/haridwargallery/8.jpg";
import g9 from "../../assets/haridwargallery/9.jpg";
import g10 from "../../assets/haridwargallery/10.jpg";
import g11 from "../../assets/haridwargallery/11.jpg";
import g12 from "../../assets/haridwargallery/12.jpg";
import sd1 from "../../assets/haridwargallery/13.jpg";
import sd2 from "../../assets/haridwargallery/14.jpg";
import sd3 from "../../assets/haridwargallery/15.jpg";
import sd4 from "../../assets/haridwargallery/16.jpg";
import sd5 from "../../assets/haridwargallery/17.jpg";
import sd6 from "../../assets/haridwargallery/18.jpg";
import sd7 from "../../assets/haridwargallery/19.jpg";
import sd8 from "../../assets/haridwargallery/20.jpg";
import sd9 from "../../assets/haridwargallery/21.jpg";
import sd10 from "../../assets/haridwargallery/22.jpg";
import sd11 from "../../assets/haridwargallery/23.jpg";
import sd12 from "../../assets/haridwargallery/24.jpg";
import sd13 from "../../assets/haridwargallery/25.jpg";
import sd14 from "../../assets/haridwargallery/26.jpg";
import sd15 from "../../assets/haridwargallery/27.jpg";
import sd16 from "../../assets/haridwargallery/28.jpg";
import sd17 from "../../assets/haridwargallery/29.jpg";
import sd18 from "../../assets/haridwargallery/30.jpg";
import sd19 from "../../assets/haridwargallery/31.jpg";
import gd11 from "../../assets/haridwargallery/32.jpg";
import gd12 from "../../assets/haridwargallery/33.jpg";
import gd13 from "../../assets/haridwargallery/34.jpg";
import gd14 from "../../assets/haridwargallery/35.jpg";
import gd15 from "../../assets/haridwargallery/36.jpg";
import gd16 from "../../assets/haridwargallery/37.jpg";
import gd17 from "../../assets/haridwargallery/38.jpg";
import gd18 from "../../assets/haridwargallery/39.jpg";
import gd19 from "../../assets/haridwargallery/40.jpg";
import hardwargate from '../../assets/hridwargate.jpg'
import pool from '../../assets/pool.jpeg';
import ni8 from '../../assets/haridwargallery/ni8.jpeg'
import ni9 from '../../assets/haridwargallery/ni9.jpeg'
import ni10 from '../../assets/haridwargallery/ni10.jpeg'
import ni11 from '../../assets/haridwargallery/ni11.jpeg'
import ni12 from '../../assets/haridwargallery/ni12.jpeg'
import ni13 from '../../assets/haridwargallery/ni13.jpeg'
import ni14 from '../../assets/haridwargallery/ni14.jpeg'
import ni15 from '../../assets/haridwargallery/ni15.jpeg'
import ni16 from '../../assets/haridwargallery/ni16.jpeg'
import ni17 from '../../assets/haridwargallery/ni17.jpeg'
import ni30 from '../../assets/haridwargallery/ni38.jpeg';
import ni31 from '../../assets/haridwargallery/ni31.jpeg';
import ni32 from '../../assets/haridwargallery/ni32.jpeg';
import ni33 from '../../assets/haridwargallery/ni33.jpeg';
import ni34 from '../../assets/haridwargallery/ni34.jpeg';
import ni35 from '../../assets/haridwargallery/ni35.jpeg';
import ni36 from '../../assets/haridwargallery/ni36.jpeg';
import ni37 from '../../assets/haridwargallery/ni37.jpeg';


// Main Image Carousel Data
const carouselImages = [
  { src: hardwargate, alt: "GATE" },
  { src: g1, alt: "GATE" },
  { src: g2, alt: "Club House" },
  { src: g3, alt: "Swimming Pool" },
  { src: g4, alt: "Kids Play Ground" },
  { src: ni30, alt: "Image 41" },
  { src: ni31, alt: "Image 42" },
  { src: ni32, alt: "Image 43" },
  { src: ni33, alt: "Image 44" },
  { src: ni34, alt: "Image 45" },
  { src: ni35, alt: "Image 46" },
  { src: ni36, alt: "Image 47" },
  { src: ni37, alt: "Image 48" },
  { src: ni8, alt: "Image 11" },
  { src: ni9, alt: "Image 11" },
  { src: ni10, alt: "Image 11" },
  { src: ni11, alt: "Image 11" },
  { src: ni12, alt: "Image 11" },
  { src: ni13, alt: "Image 11" },
  // { src: ni14, alt: "Image 11" },
  { src: ni14, alt: "Image 11" },
  { src: ni15, alt: "Image 11" },
  { src: ni16, alt: "Image 11" },
  { src: ni17, alt: "Image 11" },
  // { src: g5, alt: "Central Park Anandvan" },
  { src: g6, alt: "Design your own house" },
  // { src: g7, alt: "Wide Roads" },
  { src: g8, alt: "Plot of 100 Sqr Yards" },
  // { src: g9, alt: "Farm House" },
  // { src: g10, alt: "Clearly Denmarked Plots" },
  { src: g11, alt: "Image 11" },
  { src: g12, alt: "Image 12" },
  { src: sd1, alt: "Image 13" },
  { src: sd2, alt: "Image 14" },
  { src: sd3, alt: "Image 15" },
  // { src: sd4, alt: "Image 16" },
  { src: sd5, alt: "Image 17" },
  { src: sd6, alt: "Image 18" },
  // { src: sd7, alt: "Image 19" },
  // { src: sd8, alt: "Image 20" },
  { src: sd9, alt: "Image 21" },
  { src: sd10, alt: "Image 22" },
  { src: sd11, alt: "Image 23" },
  { src: sd12, alt: "Image 24" },
  { src: sd13, alt: "Image 25" },
  { src: sd14, alt: "Image 26" },
  
  { src: pool, alt: "Image 27" },
  // { src: sd16, alt: "Image 28" },
  // { src: sd17, alt: "Image 29" },
  // { src: sd18, alt: "Image 30" },
  { src: sd19, alt: "Image 31" },
  { src: gd11, alt: "Image 32" },
  // { src: gd2, alt: "Image 33" },
  { src: gd13, alt: "Image 34" },
  { src: gd14, alt: "Image 35" },
  { src: gd15, alt: "Image 36" },
  { src: gd16, alt: "Image 37" },
  { src: gd17, alt: "Image 38" },
  { src: gd18, alt: "Image 39" },
  { src: gd19, alt: "Image 40" },

];

const Gallery = () => {
  const images = carouselImages.map((image) => ({
    src: image.src,
    alt: image.alt || "Gallery Image",
  }));

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-5xl mb-4">Our Gallery</h1>

        {/* React Gallery Carousel */}
        <div className="relative mb-8 mx-auto">
          <Carousel
            images={images}
            style={{ height: "500px" }}
            className="mx-auto md:w-2/3 w-full"
            hasThumbnails={true}
            thumbnailHeight="80px"
            thumbnailWidth="80px"
            hasIndexBoard={false}
            isAutoPlaying={true}
            autoPlayInterval={3000}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
