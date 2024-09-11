import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

// Import only the images you are using
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
import g9 from "../../assets/g9.jpg";
import g10 from "../../assets/g10.jpg";
import g11 from "../../assets/g11.jpg";
import g12 from "../../assets/g12.jpg";
import sd1 from "../../assets/sd1.jpg";
import sd2 from "../../assets/sd2.jpg";
import sd3 from "../../assets/sd3.jpg";
import sd4 from "../../assets/sd4.jpg";
import sd5 from "../../assets/sd5.jpg";
import sd6 from "../../assets/sd6.jpg";
import sd7 from "../../assets/sd7.jpg";
import sd8 from "../../assets/sd8.jpg";
import sd9 from "../../assets/sd9.jpg";
import sd10 from "../../assets/sd10.jpg";
import sd11 from "../../assets/sd11.jpg";
import sd12 from "../../assets/sd12.jpg";
import sd13 from "../../assets/sd13.jpg";
import sd14 from "../../assets/sd14.jpg";
import sd15 from "../../assets/sd15.jpg";
import sd16 from "../../assets/sd16.jpg";
import sd17 from "../../assets/sd17.jpg";
import sd18 from "../../assets/sd18.jpg";
import sd19 from "../../assets/sd19.jpg";
import gd1 from "../../assets/gd1.jpg";
import gd2 from "../../assets/gd2.jpg";
import gd3 from "../../assets/gd3.jpg";
import gd4 from "../../assets/gd4.jpg";
import gd5 from "../../assets/gd5.jpg";
import gd6 from "../../assets/gd6.jpg";
import gd7 from "../../assets/gd7.jpg";
import gd8 from "../../assets/gd8.jpg";
import gd9 from "../../assets/gd9.jpg";

// Main Image Carousel Data
const carouselImages = [
  { src: g1, alt: "GATE" },
  { src: g2, alt: "Club House" },
  { src: g3, alt: "Swimming Pool" },
  { src: g4, alt: "Kids Play Ground" },
  { src: g5, alt: "Central Park Anandvan" },
  { src: g6, alt: "Design your own house" },
  { src: g7, alt: "Wide Roads" },
  { src: g8, alt: "Plot of 100 Sqr Yards" },
  { src: g9, alt: "Farm House" },
  { src: g10, alt: "Clearly Denmarked Plots" },
  { src: g11, alt: "Image 11" },
  { src: g12, alt: "Image 12" },
  { src: sd1, alt: "Image 13" },
  { src: sd2, alt: "Image 14" },
  { src: sd3, alt: "Image 15" },
  { src: sd4, alt: "Image 16" },
  { src: sd5, alt: "Image 17" },
  { src: sd6, alt: "Image 18" },
  { src: sd7, alt: "Image 19" },
  { src: sd8, alt: "Image 20" },
  { src: sd9, alt: "Image 21" },
  { src: sd10, alt: "Image 22" },
  { src: sd11, alt: "Image 23" },
  { src: sd12, alt: "Image 24" },
  { src: sd13, alt: "Image 25" },
  { src: sd14, alt: "Image 26" },
  { src: sd15, alt: "Image 27" },
  { src: sd16, alt: "Image 28" },
  { src: sd17, alt: "Image 29" },
  { src: sd18, alt: "Image 30" },
  { src: sd19, alt: "Image 31" },
  { src: gd1, alt: "Image 32" },
  { src: gd2, alt: "Image 33" },
  { src: gd3, alt: "Image 34" },
  { src: gd4, alt: "Image 35" },
  { src: gd5, alt: "Image 36" },
  { src: gd6, alt: "Image 37" },
  { src: gd7, alt: "Image 38" },
  { src: gd8, alt: "Image 39" },
  { src: gd9, alt: "Image 40" }
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
