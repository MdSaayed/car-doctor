import React from 'react';
import { BiTimeFive, BiSupport } from 'react-icons/bi';
import { RiTeamFill, RiVerifiedBadgeFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';
import './feature.css'


const CoreFeature = () => {
    return (
        <div className='max-w-6xl mx-auto py-8'>
            <div className="pl-0 md:pl-16 pt-24 md:space-y-4">
                <p className='text-primary font-semibold text-center'>Core Features</p>
                <h2 className='text-4xl font-bold text-center'>Why Choose Us</h2>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
                <div className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811]  hover:text-white rounded custom-bg'>
                    <RiTeamFill className='text-6xl custom-text-color' />
                    <h2>Timely Delivery</h2>
                </div>
                <div className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811] hover:text-white rounded custom-bg'>
                    <BiTimeFive className='text-6xl  custom-text-color' />
                    <h2>Timely Delivery</h2>
                </div>
                <div  className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811]  hover:text-white rounded custom-bg'>
                    <BiSupport className='text-6xl custom-text-color' />
                    <h2>24/7 Support</h2>
                </div>
                <div  className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811]  hover:text-white rounded custom-bg'>
                    <AiOutlineSetting className='text-6xl custom-text-color' />
                    <h2>Best Equipment</h2>
                </div>
                <div className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811] hover:text-white rounded custom-bg'>
                    <RiVerifiedBadgeFill className='text-6xl custom-text-color' />
                    <h2>100% Guranty</h2>
                </div>
                <div className='border p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#FF3811] hover:text-white rounded custom-bg'>
                    <TbTruckDelivery className='text-6xl custom-text-color' />
                    <h2>Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default CoreFeature;