import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Service = ({ srv }) => {
    const { _id, package_name, img, price } = srv;
    return (
        <div className='border shadow-sm hover:shadow p-4 rounded-md'>
            <img className='w-full' src={img} alt="" />
            <div className='mt-4 text-xl font-bold space-y-4'>
                <h1 className='text-[#444]'>{package_name}</h1>
                <div className='flex justify-between items-center'>
                    <p className='text-[#FF3811] text-sm'>Price: ${price}.00</p>
                    <Link to={`services/${_id}`}>
                        <FiArrowRight className='text-[#FF3811] text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;