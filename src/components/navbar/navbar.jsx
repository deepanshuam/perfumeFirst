// src/components/Navbar.js
import React from "react";
 import { Link } from "react-router-dom"; // Correctly destructure the Link component


const Navbar = () => {
  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div class="text-indigo-500 md:order-1">
			
			<svg xmlns="https://img.freepik.com/free-vector/luxurious-floral-perfume-logo-template_23-2148466518.jpg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					 />
			</svg>
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
                
				
				<li class="md:px-4 md:py-2 hover:text-indigo-400"> <Link to="/">Home</Link></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/categories">Product Categories</Link></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/about">About Us</Link></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/contact">Contact Us</Link></li>
			</ul>
		</div>
		<div class="order-2 md:order-3">
			{/* <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span></span>
            </button> */}
		</div>
	</div>
</nav>
  );
};

export default Navbar;
