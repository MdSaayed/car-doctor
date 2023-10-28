import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative'>
                    <img className='rounded' src="https://i.ibb.co/DfjT0CS/person.jpg" alt="" />
                    <img className='absolute -bottom-8 -right-8 border-white border-8 rounded w-2/3' src="https://i.ibb.co/2khjxWG/parts.jpg" alt="" />
                </div>
                <div className="pl-0 md:pl-16 pt-24 md:space-y-4">
                    <p className='text-primary font-semibold'>About Us</p>
                    <h2 className='text-4xl font-bold'>We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div>
                        <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;