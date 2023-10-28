import React, { useState } from 'react';
import Product from './Product';

const Products = () => {
    const [data, setData] = useState([]);

    fetch('./products.json')
        .then(res => res.json())
        .then(data => setData(data));

    return (
        <div className='max-w-6xl mx-auto py-8'>
            <div className="pl-0 md:pl-16 pt-24 md:space-y-4">
                <p className='text-primary font-semibold text-center'>Popular Products</p>
                <h2 className='text-4xl font-bold text-center'>Browse Our Products</h2>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    data.map((product) => <Product key={product.product_id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;