import React, { useState } from 'react';
import Service from './Service';

const Services = () => {
    const [data, setData] = useState([]);

    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setData(data));

    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className="pl-0 md:pl-16 pt-24 md:space-y-4">
                <p className='text-primary font-semibold text-center'>Service</p>
                <h2 className='text-4xl font-bold text-center'>Our Service Area</h2>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    data.map((srv,idx) => <Service key={idx}  srv={srv} />)
                }
            </div>
        </div>
    );
};

export default Services;