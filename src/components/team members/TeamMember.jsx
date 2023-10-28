import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const TeamMember = ({ member }) => {
    const { name, image_url } = member;
    return (
        <div className='border shadow-sm hover:shadow p-4 rounded-md'>
            <div>
                <img className='h-64 w-full' src={image_url} alt="" />
            </div>
            <div className='mt-4 text-xl font-bold space-y-4'>
                <h2 className='text-[#444] text-center'>{name}</h2>
                <div className='flex gap-3 justify-center'>
                    <BsFacebook className='text-2xl text-[#395185]' />
                    <AiFillTwitterCircle className='text-2xl text-[#55ACEE]' />
                    <AiFillInstagram className='text-2xl text-[#0A66C2]' />
                    <AiFillLinkedin className='text-2xl text-red-500' />
                </div>
            </div>
        </div>
    );
};

export default TeamMember;