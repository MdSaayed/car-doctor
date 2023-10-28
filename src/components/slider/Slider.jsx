// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css';

const Slider = () => {

    return (
        <Swiper
            className='max-h-screen'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
                allowTouchMove: false
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/M2kym9X/5.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8  max-w-6xl mx-auto'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>            ...
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/dMjDh9b/4.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>            ...
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/2kYhsCw/3.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>            ...
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/LQnfGwk/2.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>            ...
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/z7Dv4Lm/6.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>            ...
            <SwiperSlide>
                <div className='relative'>
                    <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                    <img className='h-full w-full' src='https://i.ibb.co/VWcZQBg/1.jpg' alt="" />
                    <div className='absolute top-[18%] left-24 space-y-8'>
                        <h2 className='top-300px text-5xl leading-[60px] leading-18 text-white font-bold z-50'>Affordable<br /> Price For Car <br /> Servicing</h2>
                        <p className='text-white text-xl tracking-widest'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className='bg-primary mr-8 rounded p-2 px-4 text-white hover:bg-transparent border-primary'>Discover More</button>
                            <button className='hover:bg-[#FF3811] rounded p-2 px-4 text-white  border-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className='flex flex-col'>
                <div className='button-next-slide w-10 h-10 flex text-white justify-center items-center absolute bottom-8 -mt-5 right-4 cursor-pointer rounded-full'>
                    <AiOutlineArrowRight className='bg-[#FF3811] rounded-full text-2xl z-50' />
                </div>        .
                <div className='button-prev-slide w-10 h-10 text-black  flex justify-center items-center absolute bottom-8  right-16 rounded-full cursor-pointer' >
                    <AiOutlineArrowLeft className='bg-[#FFF] rounded-full text-2xl z-50' />
                </div>
            </div>..
        </Swiper>
    );
};

export default Slider;