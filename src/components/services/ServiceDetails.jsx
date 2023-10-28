import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';



const ServiceDetails = () => {
    const loadedData = useLoaderData();
    const { package_name, img, description, price } = loadedData;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    console.log(services);

    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="bg-[url(https://i.ibb.co/N3DvLb2/checkout.png)] flex items-center bg-cover h-[18rem] rounded-lg">
                <h1 className="text-3xl font-bold text-white p-16">Service Details</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 my-16">
                <div className="col-span-3">
                    <div><img className="w-full h-96" src={img} alt="" /></div>
                    <div className="space-y-4 my-6">
                        <h1 className={'text-[#151515] text-3xl font-bold'}>{package_name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="bg-[#F3F3F3] rounded p-4">
                        <h2 className="mb-4 font-bold">Services</h2>
                        <div>
                            {
                                services?.map((srv, idx) => {
                                    return <>
                                        <div>
                                            <Link className="hover:text-white text-black mb-4 p-2 rounded bg-white hover:bg-[#FF3811] block" key={idx} >{srv.package_name}</Link>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                    <div className="bg-[#151515] rounded p-4">
                        <h2 className="mb-4 text-white font-bold">Download</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex">
                                <div className="flex items-center w-full gap-4">
                                    <img src="https://i.ibb.co/6r6BYrN/Frame-2.png" alt="" />
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <h2 className="font-bold text-white">Our Brochure</h2>
                                            <Link className="text-[#A2A2A2]">Download</Link>
                                        </div>
                                        <div>
                                            <Link className="bg-[#FF3811] px-1 rounded-sm">--</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex items-center w-full gap-4">
                                    <img src="https://i.ibb.co/6r6BYrN/Frame-2.png" alt="" />
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <h2 className="font-bold text-white">Company Details</h2>
                                            <Link className="text-[#A2A2A2]">Download</Link>
                                        </div>
                                        <div>
                                            <Link className="bg-[#FF3811] px-1 rounded-sm">--</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#151515] rounded flex flex-col items-center gap-4 justify-center px-4 py-8">
                        <img className="w-2/6" src="https://i.ibb.co/2YmMzhK/Group-2-2.png" alt="" />
                        <p className="text-center text-white">Need Help? We Are Here To Help You</p>
                        <div className="bg-white rounded p-4  mb-6 flex flex-col relative items-center justify-center">
                            <p className="text-black text-xl text-center font-semibold"><span className="text-[#FF3811]">Car Doctor</span> Special</p>
                            <p className="text-black text-center font-semibold mb-4">Save up to <span className="text-[#FF3811]">60% off</span></p>
                            <button className="bg-[#FF3811] absolute -bottom-4 rounded py-2 text-white px-4 text-xs">Get A Quote</button>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-2xl text-[#151515] mb-4">Price ${price}.00</p>
                        <button className="bg-[#FF3811] p-2 w-full rounded text-white">Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;