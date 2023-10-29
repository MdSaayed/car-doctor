import { useContext, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setBookings(res.data))
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    // handle booking delete
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = bookings.filter(item => item._id !== id);
                setBookings(remaining);
                toast.success('Item deleted');
            })
    }

    return (
        <div className="max-w-6xl mx-auto py-16">
            {
                bookings?.length > 0 ? <>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-center py-1 bg-gray-300">Action</th>
                                <th className="text-center py-1 bg-gray-300">Image</th>
                                <th className="text-center py-1 bg-gray-300">Price</th>
                                <th className="text-center py-1 bg-gray-300">Date</th>
                                <th className="text-center py-1 bg-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((item) => (
                                <tr key={item._id}>
                                    <td className="py-2 text-center">
                                        <AiFillCloseCircle onClick={() => handleDelete(item._id)} className='text-center mx-auto text-2xl block cursor-pointer' />
                                    </td>
                                    <td className="py-2 text-center">
                                        <img src={item?.img} alt="Product" className="w-16 h-16 mx-auto" />
                                    </td>
                                    <td className="py-2 text-center">{item?.price}</td>
                                    <td className="py-2 text-center">{item?.date}</td>
                                    <td className="py-2 text-center">
                                        <span className={`px-2 py-1 rounded ${item.status === 'Confirm' ? 'bg-green-500 text-white' : 'bg-[#FF3811] text-white'}`}>
                                            {item?.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </> : <>
                    <div className='h-[60vh] w-full flex items-center justify-center'>
                        <p>You haven't made any bookings yet.</p>
                    </div>
                </>
            }
        </div>

    );
};

export default Bookings;