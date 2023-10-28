import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle,AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-[#151515] py-24'>
            <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
                <div className='col-span-2 space-y-6'>
                    <img src="https://i.ibb.co/Cwb9KDT/Group-2-1.png" alt="" />
                    <div className='text-white'>
                        <p>Edwin Diaz is a software and web  technologies<br/> engineer, a life coach trainer <br/> who is also a serial .</p>
                        <div className='flex gap-4 text-2xl my-6'>
                            <Link><AiFillGoogleCircle /></Link>
                            <Link><AiFillTwitterCircle /></Link>
                            <Link><AiFillInstagram /></Link>
                            <Link><AiFillLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h2 className='text-xl font-bold mb-4'>About</h2>
                    <Link to={'/'}>Home</Link>
                    <Link to={'services'}>Service</Link>
                    <Link to={'contact'}>Contact</Link>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h2 className='text-xl font-bold mb-4'>Company</h2>
                    <Link>Why Car Docto</Link>
                    <Link>About</Link>
                </div>
                <div className='text-white flex flex-col gap-3'>
                    <h2 className='text-xl font-bold mb-4'>Support</h2>
                    <Link>Support Center</Link>
                    <Link>Feedback</Link>
                    <Link>Accesbility</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;