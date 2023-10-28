

const Locations = () => {
    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 bg-[#151515] rounded text-white p-16">
                <div className="flex gap-4 items-center">
                    <img className="w-[2rem] h-[2rem]" src="https://i.ibb.co/kh2n2sx/001-timetable.png" alt="" />
                    <div>
                        <h2 className="font-bold">We are open monday-friday</h2>
                        <p className="font-bold text-lg">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img className="w-[2rem] h-[2rem]" src="https://i.ibb.co/dWVQ9PP/Group-34.png" alt="" />
                    <div>
                        <h2 className="font-bold">Have a question?</h2>
                        <p className="font-bold text-lg">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img className="w-[2rem] h-[2rem]" src="https://i.ibb.co/HtB1sJB/Group-35.png" alt="" />
                    <div>
                        <h2 className="font-bold">Need a repair? our address</h2>
                        <p className="font-bold text-lg">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;