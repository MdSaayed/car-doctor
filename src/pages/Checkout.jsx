import React from 'react';

const Checkout = () => {
    return (
        <div className="pb-16 pt-8 max-w-6xl mx-auto">
            <div className="bg-[url(https://i.ibb.co/N3DvLb2/checkout.png)] flex items-center bg-cover h-[18rem] rounded-lg">
                <h1 className="text-3xl font-bold text-white p-16">Check Out</h1>
            </div>
            <div>
                <div className="p-16 my-16 rounded bg-[#F3F3F3]">
                    <form >
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="fname" placeholder="First name" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="lname" placeholder="Last name" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="email" name="phone" placeholder="Your phone" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="email" name="email" placeholder="Your email" required />
                            </div>
                        </div>
                        <div>
                            <textarea className="p-2 border my-2 rounded w-full" placeholder='Your message' name="message" id="" cols="100" rows="6"></textarea>
                        </div>
                        <input className="bg-[#FF3811] py-2 my-2 px-6 rounded text-white w-full" type="submit" value="Order Confirm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;