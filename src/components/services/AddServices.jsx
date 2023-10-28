import React from 'react';

const AddServices = () => {
    return (
        <div className="pb-16 pt-8 max-w-6xl mx-auto">
            <div className="bg-[url(https://i.ibb.co/N3DvLb2/checkout.png)] flex items-center bg-cover h-[18rem] rounded-lg">
                <h1 className="text-3xl font-bold text-white p-16">Add New Service</h1>
            </div>
            <div>
                <div className="p-16 my-16 rounded bg-[#F3F3F3]">
                    <form >
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="serviceName" placeholder="Service name" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="number" name="price" placeholder="servicePrice" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="text" placeholder="text here" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="serviceType" placeholder="Service Type" required />
                            </div>
                        </div>
                        <div>
                            <textarea className="p-2 border my-2 rounded w-full" placeholder='Product Description' name="description" id="" cols="100" rows="6"></textarea>
                        </div>
                        <input className="bg-[#FF3811] py-2 my-2 px-6 rounded text-white w-full" type="submit" value="Add service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;