/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {image, title, description} = service
    
    return (
        <div className='w-48 h-64 relative my-4'>
            <img className='h-20' src={image} alt="" />
            <h4 className='font-bold mt-5 w-2/3'>{title}</h4>
            <p className='my-4'>{description}</p>
            <div className=' absolute bottom-0'>
            <button className='flex items-center gap-2 font-bold text-[#32C5FF]'><span>Learn More</span><FaArrowRight></FaArrowRight> </button>
            </div>
        </div>
    );
};

export default ServiceCard;