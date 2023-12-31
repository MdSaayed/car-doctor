import { NavLink } from "react-router-dom";

import search from "../../../icons/8.svg";
import cartIcon from "../../../icons/7.svg";
import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProvider';
import { toast } from "react-toastify";


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    // user signout handle
    const handleSignOutUser = () => {
        console.log('clicked')
        signOutUser()
            .then(res => toast.success('Logout successfully.'))
    }

    return (
        <div>
            <nav className="flex justify-between max-w-6xl mx-auto py-2">
                <ul>
                    <li className="w-2/4"><NavLink to={'/'}><img src="https://i.ibb.co/vhf9ZFZ/Group-2.png" /></NavLink></li>
                </ul>
                <ul className="flex gap-4 items-center">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/services'}>Services</NavLink></li>
                    <li><NavLink to={'/bookings'}>Bookings</NavLink></li>
                    <li><NavLink to={'/blog'}>Bolg</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    {
                        user?.email ? (
                            <li><NavLink onClick={handleSignOutUser}>Logout</NavLink></li>
                        ) : (
                            <li><NavLink to={'signin'}>Login</NavLink></li>
                        )
                    }

                </ul>
                <ul className="flex gap-4 items-center">
                    <li><NavLink><img className="w-[18px]" src={cartIcon} /></NavLink></li>
                    <li><NavLink><img className="w-[18px]" src={search} /></NavLink></li>
                    <li className="text-primary border-[#FF3811] border px-3 py-1 rounded font-semibold"><NavLink to={''}>Appointment</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;