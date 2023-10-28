import React from 'react';

const Product = ({ product }) => {
    const { product_name, image_url, price } = product;
    return (
        <div className='border shadow-sm hover:shadow p-4 rounded-md'>
            <div className='flex justify-center bg-[#F3F3F3] rounded-md h-44 py-8'>
                <img className='w-1/2' src={image_url} alt="" />
            </div>
            <div className='mt-4 text-xl font-bold space-y-4'>
                <h1 className='text-[#444] text-center'>{product_name}</h1>
                <div className='flex justify-center items-center'>
                    <p className='text-[#FF3811] text-sm text-center'>Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;