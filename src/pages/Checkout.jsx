import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const Checkout = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const { package_name, img, description, price, _id } = data;


    // handle book services
    const bookedServices = (e) => {
        e.preventDefault();
        const form = e.target;
        const customerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;

        const bookig = {
            package_name,
            customerName,
            price,
            email,
            img,
            phone,            
            date,
            service_id: _id,

            status: 'pending'
        }
        fetch(`http://localhost:5000/bookings`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookig)
        })
            .then(res => res.json())
            .then(data => toast.success('Order Placed successfully.'))
    }

    return (
        <div className="pb-16 pt-8 max-w-6xl mx-auto">
            <div className="bg-[url(https://i.ibb.co/N3DvLb2/checkout.png)] flex items-center bg-cover h-[18rem] rounded-lg">
                <h1 className="text-3xl font-bold text-white p-16">Check Out</h1>
            </div>
            <div>
                <div className="p-16 my-16 rounded bg-[#F3F3F3]">
                    <div>
                        <h1 className="text-3xl font-bold text-black text-center mb-4">Book service: {package_name}</h1>
                    </div>
                    <form onSubmit={bookedServices}>
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="text" name="name" placeholder="Your name" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="date" name="date" placeholder="date" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6 items-center justify-between'>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="number" name="phone" placeholder="Your phone" required />
                            </div>
                            <div>
                                <input className="p-2 border my-2 rounded w-full" type="email" name="email" readOnly defaultValue={user?.email} placeholder="Your email" required />
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