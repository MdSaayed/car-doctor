import { Link, Navigate } from "react-router-dom";
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                toast.success('SignUp successfully.');
                Navigate('/signin');
            })
            .catch(err => toast.warning('Alredy use this email'));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-16 max-w-6xl mx-auto gap-4">
            <div>
                <img className="w-3/5" src="https://i.ibb.co/r75tLQk/Frame.png" alt="" />
            </div>
            <div>
                <div className="border p-16 rounded">
                    <div>
                        <h1 className="text-4xl font-bold text-center pb-8">Sign Up</h1>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <label className="font-bold" htmlFor="name">Your name</label>
                        <input className="p-2 border my-2 rounded w-full" type="text" name="name" placeholder="Your name" required />
                        <label className="font-bold" htmlFor="email">Your email</label>
                        <input className="p-2 border my-2 rounded w-full"  type="email" name="email" placeholder="Your email" required />
                        <label className="font-bold" htmlFor="passwor">Your password</label>
                        <input className="p-2 border my-2 rounded w-full" type="password" name="password" placeholder="Your password" required />
                        <input className="bg-[#FF3811] py-2 my-2 px-6 rounded text-white w-full" type="submit" value="Sign Up" />
                    </form>
                    <div>
                        <p className="text-center my-4">Or Sign Up with</p>
                        <div>
                            <div className="flex items-center justify-center my-4 gap-6">
                                <Link><BiLogoFacebook className="icon" style={{ color: '#3B5998' }} /></Link>
                                <Link><FaLinkedinIn className="icon" style={{ color: '#0077B5' }} /></Link>
                                <Link><BiLogoGoogle className="icon" style={{ color: '#4285F4' }} /></Link>
                            </div>
                            <p className="text-center">Already have an account? <Link className="text-[#FF3811]" to={'signin'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;