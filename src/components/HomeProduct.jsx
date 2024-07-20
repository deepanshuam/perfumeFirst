import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


import ProductCard from "./product/ProductCard";
import server from "./constant/config";
const HomeProduct = () => {
  const [perfume, setPerfume] = useState([]);

  useEffect(() => {
    const getPerfume = async () => {
      try {
        // const res = await axios.get("http://localhost:4000/api/products");
         const res = await axios.get(`${server}/api/products`);
        // const data =res.data.filter((data)=>data.tag==="Free")
        const data = res.data;
        setPerfume(data);
        console.log(res);
      } catch (error) {
        console.log("Error on fetching data at Perfume.js" + error);
      }
    };
    getPerfume();
  }, []);

  // console.log(data);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="max-w-screen-2xl container mx-auto  md:px-20 p-4">
          <div>
            <h1 className="font-ibold text-xl pb-2 text-center ">
              Latest Collections
            </h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse fugiat explicabo similique ducimus ratione reprehenderit est, aspernatur nostrum itaque! Necessitatibus consequatur impedit quia blanditiis iusto, inventore cupiditate quaerat maxime numquam officiis!</p> */}
          </div>

          <div>
            <Slider {...settings}>
              {/* <ProductCard/> */}

              {perfume.map((items) => (
                <ProductCard items={items} key={items.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
