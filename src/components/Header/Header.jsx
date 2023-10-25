import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.svg";
import search from "../../../icons/search.png";
import cartIcon from "../../../icons/cart.png";


const Header = () => {
    return (
        <div>
            <nav className="flex justify-between max-w-6xl mx-auto py-2">
                <ul>
                    <li className="w-2/4"><NavLink to={'/'}><img src={logo} /></NavLink></li>
                </ul>
                <ul className="flex gap-4 items-center">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/services'}>Services</NavLink></li>
                    <li><NavLink to={'/blog'}>Bolg</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
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