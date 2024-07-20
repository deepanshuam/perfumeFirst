
import React, { useEffect } from 'react'
import ProductCard from "../components/product/ProductCard";
// import list from '../data/list.json';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer';
const ProductPage = () => {

  const[perfume,setPerfume]=useState([]);

  useEffect(()=>{
    const getPerfume = async()=>{
    try {
      const res = await axios.get("https://perfumesecond.onrender.com");
      console.log(res.data);
      setPerfume(res.data);
    } catch (error) {
    console.log("Error on fetching data at Perfume.js" + error);
    }
    };
    getPerfume();
  },[])

  return (
    <>
    <Navbar/>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col'>
    <div className='mt-28 items-center justify-center text-center '>
      <h1 className='text-2xl font-bold md:text-4xl'>We are delighted to have you here! :</h1>
      <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolores iure, quam harum praesentium eos aut deserunt corporis. Eos debitis temporibus quaerat minima necessitatibus! In voluptatem fugiat neque sequi cumque corrupti ea accusantium, adipisci ad dicta eum temporibus non error! Maxime cum aliquid ea unde molestiae odit, nulla suscipit ipsa distinctio asperiores dolore explicabo enim consequatur, corporis hic rerum laudantium. Vel molestias voluptatibus obcaecati quasi repellat a impedit nisi voluptate corporis? Fuga eligendi iusto soluta. Molestias excepturi perferendis voluptatem impedit assumenda! Similique debitis a tempore suscipit.</p>
      <Link to="/">
      <button className="btn btn-outline btn-secondary mt-6 ">Back</button>
      </Link>
      </div>
      
      {/* for  */}
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
           {
             perfume.map((items)=>(
              <ProductCard key={items.id} items = {items}/>
             ))
           }
      </div>
   </div>
   <Footer/>
    </>
  )
}

export default ProductPage;
